document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Fudgy Brownies",
      variants: [
        { 
          name: "Original Classic⭐", 
          sizes: [
            { label: "Small (20x10 cm)", price: 95000 },
            { label: "Large (20x20 cm)", price: 190000 }
          ],
          img: "../Picture/brownies.jpg",
          bestSeller: true
        },
        { 
          name: "Peanut Butter ⭐", 
          sizes: [
            { label: "Small (20x10 cm)", price: 105000 },
            { label: "Large (20x20 cm)", price: 210000 }
          ],
          img: "../Picture/browniepeanut.jpg"
        },
        { 
          name: "Almond ⭐", 
          sizes: [
            { label: "Small (20x10 cm)", price: 100000 },
            { label: "Large (20x20 cm)", price: 200000 }
          ],
          img: "../Picture/browniealmond.jpg"
        },
        { 
          name: "Cheesecake", 
          sizes: [
            { label: "Small (20x10 cm)", price: 140000 },
            { label: "Large (20x20 cm)", price: 275000 }
          ],
          img: "../Picture/browniecheese.jpg"
        },
        { 
          name: "Chocolate", 
          sizes: [
            { label: "Small (20x10 cm)", price: 105000 },
            { label: "Large (20x20 cm)", price: 210000 }
          ],
          img: "../Picture/browniechoco.jpg"
        },
        { 
          name: "Nutella", 
          sizes: [
            { label: "Small (20x10 cm)", price: 105000 },
            { label: "Large (20x20 cm)", price: 210000 }
          ],
          img: "../Picture/brownienuttela.jpg"
        },
        { 
          name: "Oreo", 
          sizes: [
            { label: "Small (20x10 cm)", price: 100000 },
            { label: "Large (20x20 cm)", price: 200000 }
          ],
          img: "../Picture/browniechoco.jpg"
        },
        { 
          name: "Lotus Biscoff", 
          sizes: [
            { label: "Small (20x10 cm)", price: 105000 },
            { label: "Large (20x20 cm)", price: 210000 }
          ],
          img: "../Picture/brownielotus.jpg"
        },
      ]
    },
    {
      name: "Burnt Cheese Cake",
      variants: [
        { 
          name: "Original Classic ⭐", 
          sizes: [
            { label: "10 cm", price: 95000 },
            { label: "15 cm", price: 190000 }
          ],
          img: "../Picture/burntori.jpg",
          bestSeller: true
        },
        { 
          name: "Chocolate", 
          sizes: [
            { label: "10 cm", price: 95000 },
            { label: "15 cm", price: 190000 }
          ],
          img: "../Picture/burntchoco.jpg"
        },
        { 
          name: "Matcha", 
          sizes: [
            { label: "10 cm", price: 95000 },
            { label: "15 cm", price: 190000 }
          ],
          img: "../Picture/burntmatcha.jpg"
        }
      ]
    },
     {
      name: "Pistachio Kunafa Brownie",
      variants: [
        { 
          name: "Original ⭐", 
          sizes: [
            { label: "10 x 10 cm", price: 125000 },
            { label: "20 x 10 cm", price: 245000 },
             { label: "20 x 20 cm", price: 485000 }
          ],
          img: "../Picture/pistachiobrownietrans.png",
          bestSeller: true
        }
      ]
    },
     {
      name: "Soft Thicc Cookies",
      variants: [
        { 
          name: "Original ⭐", 
          sizes: [
            { label: "1 Piece", price: 27000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookieori.jpg",
          bestSeller: true
        },
         { 
          name: "Double Chocolate ⭐", 
          sizes: [
            { label: "1 Piece", price: 30000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookiedouble.jpg",
          bestSeller: true
        },
         { 
          name: "Red Velvet ⭐", 
          sizes: [
            { label: "1 Piece", price: 27000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookiered.jpg",
          bestSeller: true
        },
         { 
          name: "Dark Choco Caramel ⭐", 
          sizes: [
            { label: "1 Piece", price: 30000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookieori.jpg",
          bestSeller: true
        },
         { 
          name: "Kindernoy ⭐", 
          sizes: [
            { label: "1 Piece", price: 30000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookiekindernoy.jpg",
          bestSeller: true
        },
         { 
          name: "Nutella", 
          sizes: [
            { label: "1 Piece", price: 27000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookienutella.jpg",
          bestSeller: true
        },
         { 
          name: "Lotus Biscoff", 
          sizes: [
            { label: "1 Piece", price: 30000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookielotus.jpg",
          bestSeller: true
        },
         { 
          name: "S'mores", 
          sizes: [
            
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookiesmores.jpg",
          bestSeller: true
        },
         { 
          name: "Matcha Crumble", 
          sizes: [
            { label: "1 Piece", price: 30000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookiematcha.jpg",
          bestSeller: true
        },
         { 
          name: "Choco Peanut", 
          sizes: [
            { label: "1 Piece", price: 27000 },
            { label: "Bundle of 3", price: 80000 },
            { label: "Bundle of 6", price: 160000 },
            { label: "Bundle of 8", price: 213000 },
            { label: "Bundle of 10", price: 266000 }

          ],
          img: "../Picture/cookiepeanut.jpg",
          bestSeller: true
        }
      ]
    },
     {
      name: "Korean Salt Bread",
      variants: [
        { 
          name: "Original ⭐", 
          sizes: [
            { label: "1 Piece", price: 14000 },
          ],
          img: "../Picture/saltbreadori.jpg",
          bestSeller: true
        },
        { 
          name: "Garlic ⭐", 
          sizes: [
            { label: "1 Piece", price: 15000 },
          ],
          img: "../Picture/saltbreadgarlic.jpg",
          bestSeller: true
        },
        { 
          name: "Chocolate ⭐", 
          sizes: [
            { label: "1 Piece", price: 25000 },
          ],
          img: "../Picture/saltbreadchoco.jpg",
          bestSeller: true
        },
        { 
          name: "Chicken Floss", 
          sizes: [
            { label: "1 Piece", price: 26000 },
          ],
          img: "../Picture/saltbreadfloss.jpg",
          bestSeller: true
        },
        { 
          name: "Ham and Cheese", 
          sizes: [
            { label: "1 Piece", price: 20000 },
          ],
          img: "../Picture/saltbreadhamncheese.jpg",
          bestSeller: true
        },
        { 
          name: "Mushroom Truffle", 
          sizes: [
            { label: "1 Piece", price: 25000 },
          ],
          img: "../Picture/saltbreadtruffle.jpg",
          bestSeller: true
        },
        { 
          name: "Garlic Mozza", 
          sizes: [
            { label: "1 Piece", price: 25000 },
          ],
          img: "../Picture/saltbreadmozza.jpg",
          bestSeller: true
        },
      ]
    },
     {
      name: "Japanese Milkbuns",
      variants: [
        { 
          name: "Original ⭐", 
          sizes: [
            { label: "30 x 30 cm", price: 60000 },
          ],
          img: "../Picture/milkbunplain.jpg",
          bestSeller: true
        },
        { 
          name: "Choco Crunchy⭐", 
          sizes: [
            { label: "30 x 30 cm", price: 75000 },
          ],
          img: "../Picture/milkbuncrunchy.webp",
          bestSeller: true
        },
        { 
          name: "Cream Cheese ⭐", 
          sizes: [
            { label: "30 x 30 cm", price: 85000 },
          ],
          img: "../Picture/milkbunplain.jpg",
          bestSeller: true
        },
        { 
          name: "Blueberry Cream Cheese", 
          sizes: [
            { label: "30 x 30 cm", price: 85000 },
          ],
          img: "../Picture/milkbunblueberry.webp",
          bestSeller: true
        },
        { 
          name: "Nutella", 
          sizes: [
            { label: "30 x 30 cm", price: 100000 },
          ],
          img: "../Picture/milkbunnutella.jpg",
          bestSeller: true
        },
        { 
          name: "Nutella Cheese", 
          sizes: [
            { label: "30 x 30 cm", price: 110000 },
          ],
          img: "../Picture/milkbunnutella.jpg",
          bestSeller: true
        },
        { 
          name: "Lotus Biscoff", 
          sizes: [
            { label: "30 x 30 cm", price: 100000 },
          ],
          img: "../Picture/milkbunplain.jpg",
          bestSeller: true
        },
        { 
          name: "Dark Choco", 
          sizes: [
            { label: "30 x 30 cm", price: 145000 },
          ],
          img: "../Picture/milkbundark.jpg",
          bestSeller: true
        }
      ]
    },
  ];

  const grid = document.getElementById("product-grid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    // Default varian pertama
    let activeVariant = product.variants[0];

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${activeVariant.img}" alt="${product.name} - ${activeVariant.name}" class="product-img">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        
        <div class="variant-list">
         ${product.variants.map(v => 
  `<div class="variant-item${v.name === activeVariant.name ? ' active' : ''}" data-img="${v.img}">
     <span class="variant-name">${v.name}</span>
   </div>`).join('')}
        </div>

        <p class="size-label-heading">Pilih Ukuran:</p>
        <div class="size-list">
         ${activeVariant.sizes.map((s, i) => 
  `<div class="size-item${i === 0 ? ' active' : ''}" data-price="${s.price}">
     <span class="size-label">${s.label}</span>
     <span class="size-price">Rp ${s.price.toLocaleString()}</span>
   </div>`).join('')}
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Elemen
    const variantItems = card.querySelectorAll(".variant-item");
    const sizeList = card.querySelector(".size-list");
    const productImg = card.querySelector(".product-img");

    // Event klik varian → update gambar + size list
    variantItems.forEach(variant => {
      variant.addEventListener("click", () => {
        variantItems.forEach(v => v.classList.remove("active"));
        variant.classList.add("active");

        // cari varian sesuai klik
        const selectedVariant = product.variants.find(v => v.name === variant.textContent.trim());

        // update gambar
        productImg.src = selectedVariant.img;
        productImg.alt = `${product.name} - ${selectedVariant.name}`;

        // update size list
        sizeList.innerHTML = selectedVariant.sizes.map((s, i) => 
          `<div class="size-item${i === 0 ? ' active' : ''}" data-price="${s.price}">
             <span class="size-label">${s.label}</span>
             <span class="size-price">Rp ${s.price.toLocaleString()}</span>
           </div>`).join('');

        // aktifkan klik size baru
        sizeList.querySelectorAll(".size-item").forEach(size => {
          size.addEventListener("click", () => {
            sizeList.querySelectorAll(".size-item").forEach(s => s.classList.remove("active"));
            size.classList.add("active");
          });
        });
      });
    });

    // aktifkan klik size awal
    sizeList.querySelectorAll(".size-item").forEach(size => {
      size.addEventListener("click", () => {
        sizeList.querySelectorAll(".size-item").forEach(s => s.classList.remove("active"));
        size.classList.add("active");
      });
    });
  });
});
