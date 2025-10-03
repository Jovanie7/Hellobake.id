document.addEventListener("DOMContentLoaded", () => {
  const queueCodeEl = document.getElementById("queue-code");
  const orderSummaryEl = document.getElementById("order-summary");
  const downloadBtn = document.getElementById("download-btn");
  const orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
  const orderTotal = parseInt(localStorage.getItem("orderTotal")) || 0;
  const customMessage = localStorage.getItem("customMessage") || "";
  const addressBox = document.querySelector(".address-box");
  const pickupRadios = document.querySelectorAll('input[name="pickup"]');

  // Redirect jika tidak ada order
  if(orderItems.length === 0){
    alert("Belum ada pesanan. Silakan kembali ke halaman pemesanan!");
    window.location.href = "custom.html";
    return;
  }

  // Generate kode antrian hanya jika belum ada di localStorage
  let queueCode = localStorage.getItem("queueCode");
  if (!queueCode) {
    queueCode = generateQueueCode();
    localStorage.setItem("queueCode", queueCode);
  }
  queueCodeEl.textContent = queueCode;

  function generateQueueCode() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter = letters.charAt(Math.floor(Math.random() * letters.length));
    const number = Math.floor(Math.random() * 900 + 100);
    return `#${letter}${number}`;
  }

  // Tampilkan ringkasan pesanan + custom message di page
  let summaryText = "";
  orderItems.forEach(item => {
    summaryText += `${item.nameVariant} - Rp ${item.price.toLocaleString()}\n`;
  });
  summaryText += `\nTotal: Rp ${orderTotal.toLocaleString()}`;
  if(customMessage){
    summaryText += `\n\nPesan Custom:\n${customMessage}`;
  }
  orderSummaryEl.textContent = summaryText;

  // Tampilkan addressBox sesuai pilihan pickup
  let selectedPickup = localStorage.getItem("pickupMethod") || "booth";
  addressBox.style.display = selectedPickup === "delivery" ? "flex" : "none";

  pickupRadios.forEach(radio => {
    radio.checked = radio.value === selectedPickup;
    radio.addEventListener("change", () => {
      selectedPickup = radio.value;
      addressBox.style.display = selectedPickup === "delivery" ? "flex" : "none";
      localStorage.setItem("pickupMethod", selectedPickup);
    });
  });

  // Download struk PNG
  downloadBtn.addEventListener("click", () => {
    // Ambil data alamat hanya kalau delivery
    let recipient = "", street = "", city = "", postal = "";
    if(selectedPickup === "delivery") {
      recipient = document.getElementById("recipient-name").value.trim();
      street = document.getElementById("street-address").value.trim();
      city = document.getElementById("city").value.trim();
      postal = document.getElementById("postal-code").value.trim();

      if (!recipient || !street || !city || !postal) {
        alert("Harap isi semua data alamat pengiriman sebelum mendownload struk.");
        return;
      }
    }

    // Hitung tinggi canvas otomatis
    const baseHeight = 400;
    const itemHeight = orderItems.length * 25;
    const deliveryHeight = (selectedPickup === "delivery" ? 120 : 0);

    // Untuk customMessage, hitung perkiraan tinggi
    const canvasTest = document.createElement("canvas");
    const ctxTest = canvasTest.getContext("2d");
    ctxTest.font = "italic 18px Lora";
    const customLines = customMessage ? countWrappedLines(ctxTest, `Pesan Custom: ${customMessage}`, 500) : 0;
    const customHeight = customLines * 22;

    const canvasHeight = baseHeight + itemHeight + customHeight + deliveryHeight;

    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header
    ctx.font = "bold 36px Pinyon Script";
    ctx.fillStyle = "#b22222";
    ctx.fillText("Hellobake.id", 20, 60);

    // Kode Antrian
    ctx.font = "bold 28px Lora";
    ctx.fillStyle = "#228b22";
    ctx.fillText(`Kode Antrian: ${queueCode}`, 20, 120);

    // Alamat jika delivery
    let startY = 160;
    if(selectedPickup === "delivery") {
      ctx.font = "20px Lora";
      ctx.fillStyle = "#000";
      ctx.fillText("Alamat Pengiriman:", 20, 160);
      ctx.fillText(`Nama: ${recipient}`, 20, 190);
      ctx.fillText(`Alamat: ${street}`, 20, 220);
      ctx.fillText(`Kota: ${city}`, 20, 250);
      ctx.fillText(`Kode Pos: ${postal}`, 20, 280);
      startY = 310;
    }

    // Pesanan
    ctx.font = "20px Lora";
    ctx.fillStyle = "#000";
    ctx.fillText("Pesanan:", 20, startY);
    let y = startY + 30;
    orderItems.forEach(item => {
      ctx.fillText(`${item.nameVariant} - Rp ${item.price.toLocaleString()}`, 20, y);
      y += 35;
    });

    // Total
    ctx.font = "bold 22px Lora";
    ctx.fillStyle = "#228b22";
    ctx.fillText(`Total: Rp ${orderTotal.toLocaleString()}`, 20, y);
    y += 30;

// Custom message
if(customMessage){
  ctx.font = "italic 18px Lora";
  ctx.fillStyle = "#000";
  y = wrapText(ctx, `Pesan Custom: ${customMessage}`, 20, y, 500, 22);
  
  // Tambahkan spacing ekstra sebelum pesan tambahan
  y += 20; // misal 20px spacing
}

// Pesan tambahan
const additionalMessage = `Terima kasih telah memilih Hellobake.id! Bagikan momen memberi atau menerima hampers dengan #ForThePreciousOnes dan tag @HelloBake.id. 💝`;
y = wrapText(ctx, additionalMessage, 20, y, canvas.width - 40, 22);


    // Logo
    const logo = new Image();
    logo.src = "../Picture/LOGO.jpg";
    logo.onload = () => {
      ctx.drawImage(logo, 450, 20, 120, 120);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `Struk_${queueCode}.png`;
      link.click();
    };
    logo.onerror = () => {
      alert("Logo gagal dimuat, struk tetap diunduh tanpa logo.");
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `Struk_${queueCode}.png`;
      link.click();
    };
  });

  // Fungsi wrapText
  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    let line = '';

    for (let i = 0; i < text.length; i++) {
      const testLine = line + text[i];
      if (ctx.measureText(testLine).width > maxWidth && line !== '') {
        ctx.fillText(line, x, y);
        line = text[i]; // pindah karakter ke baris baru
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    if (line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
    }

    return y;
  }

  // Fungsi hitung jumlah baris untuk customMessage
  function countWrappedLines(ctx, text, maxWidth) {
    let lines = 0;
    let line = '';
    for (let i = 0; i < text.length; i++) {
      const testLine = line + text[i];
      if (ctx.measureText(testLine).width > maxWidth && line !== '') {
        lines++;
        line = text[i];
      } else {
        line = testLine;
      }
    }
    if (line) lines++;
    return lines;
  }

});
