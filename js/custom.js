// ======== VARIABLES ========
const products = document.querySelectorAll(".product-item");
const previewItems = document.querySelector(".preview-items");
const totalElement = document.getElementById("total");
const nextBtn = document.querySelector(".next-btn");

let total = 0;

// ======== ADD PRODUCT TO PREVIEW ========
products.forEach(product => {

  const addBtn = product.querySelector(".add-btn");

  const name = product.dataset.name;

  addBtn.addEventListener("click", () => {

    const variantSelect = product.querySelector(".variant");

    const selectedOption = variantSelect.options[variantSelect.selectedIndex];

    const variant = selectedOption.value;

    const price = parseInt(selectedOption.dataset.price);

    const imgSrc = selectedOption.dataset.img; // <-- ambil dari data-img

    products.forEach(product => {
  const img = product.querySelector("img"); // gambar produk
  const variantSelect = product.querySelector(".variant");

  // Ganti gambar saat variant berubah
  variantSelect.addEventListener("change", () => {
    const selectedOption = variantSelect.options[variantSelect.selectedIndex];
    const imgSrc = selectedOption.dataset.img; // ambil dari data-img
    img.src = imgSrc; // ganti gambar produk
  });
});

    // Buat preview item
    const previewItem = document.createElement("div");
    previewItem.classList.add("preview-item");
    previewItem.innerHTML = `
      <img src="${imgSrc}" alt="${name}">
      <div class="item-info">
        <p>${name} (${variant})</p>
        <p>Rp ${price.toLocaleString()}</p>
      </div>
      <button class="remove-btn">&times;</button>
    `;

    previewItems.appendChild(previewItem);

    // Update total
    total += price;
    updateTotal();

    // Remove button
    const removeBtn = previewItem.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      previewItem.remove();
      total -= price;
      updateTotal();
      saveOrderData();
    });

    saveOrderData();
  });
});


// ======== UPDATE TOTAL ========
function updateTotal() {
  totalElement.textContent = total.toLocaleString();
}

// ======== HARGA SESUAI VARIAN ========
const variantSelects = document.querySelectorAll(".variant");
variantSelects.forEach(select => {
  select.addEventListener("change", () => {
    const selectedOption = select.options[select.selectedIndex];
    const price = parseInt(selectedOption.dataset.price);
    const priceElement = select.parentElement.querySelector(".price");
    priceElement.textContent = "Rp " + price.toLocaleString();
  });
});

// ======== SIMPAN ORDER KE LOCALSTORAGE ========
function saveOrderData() {
  const items = [];
  document.querySelectorAll(".preview-item").forEach(item => {
    const nameVariant = item.querySelector(".item-info p:first-child").textContent;
    const priceText = item.querySelector(".item-info p:last-child").textContent;
    const price = parseInt(priceText.replace(/[Rp.\s,.]/g,""));
    items.push({ nameVariant, price });
  });
  localStorage.setItem("orderItems", JSON.stringify(items));
  localStorage.setItem("orderTotal", total);
}

// ======== NEXT BUTTON ========
nextBtn.addEventListener("click", (e) => {
  const itemCount = previewItems.children.length;

  if(itemCount < 2) {
    alert("Pilih minimal 2 produk sebelum melanjutkan!");
    e.preventDefault(); // mencegah navigasi
    return;
  }

  saveOrderData();
  window.location.href = "greeting.html";
});
