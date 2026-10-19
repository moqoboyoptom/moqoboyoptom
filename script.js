const products = [
  { id: 1, name: "Coca cola 1.5l", category: "Cocacola", price: 13990, oldPrice: 79990, rating: 4.9, image: "1.jpg", emoji: "🥤" },
  { id: 2, name: "Fanta 1.5l", category: "Cocacola", price: 13990, oldPrice: 79990 , rating: 4.7, image: "2.jpg", emoji: "🍊" },
  { id: 3, name: "Qibray 1.5l", category: "Pivo", price: 17990, oldPrice:   95990, rating: 4.9, image: "3.jpg", emoji: "🍺" },
  { id: 4, name: "Sarbast 1.5l", category: "Pivo", price: 24990, oldPrice: 124990, rating: 4.6, image: "4.jpg", emoji: "🍺" },
  { id: 6, name: "Coca cola 1.0l", category: "Cocacola", price: 9990, oldPrice: 59909, rating: 4.5, image: "6.jpg", emoji: "🥤" },
  { id: 7, name: "Fanta 1.0l", category: "Cocacola", price: 9990, oldPrice: 59990, rating: 4.9, image: "7.jpg", emoji: "🍊" },
  { id: 8, name: "Oltinchi 1.5l", category: "Pivo", price: 24990, oldPrice: 124990, rating: 4.7, image: "8.jpg", emoji: "🍺" },
  { id: 9, name: "Dena 1.0l", category: "Sharbatlar", price: 14990, oldPrice: 149990, rating: 4.8, image: "9.jpg", emoji: "🧃" },
  { id: 10, name: "Panda 0.5l", category: "Ichimliklar", price: 9990, oldPrice: 149990, rating: 4.6, image: "10.jpg", emoji: "🥤" },
  { id: 11, name: "Baltika 9 0.5l", category: "Pivo", price: 15990, oldPrice: 18696, rating: 4.6, image: "11.jpg", emoji: "🥤" },
  { id: 12, name: "Gorilla 0.5l", category: "Energetiklar", price: 10990, oldPrice: 239990, rating: 4.5, image: "12.jpg", emoji: "🥤" },
  { id: 13, name: "Elsuv 1.0l", category: "Suvlar", price: 2990, oldPrice: 12990, rating: 4.4, image: "13.jpg", emoji: "🥤" },
  { id: 14, name: "Bliss 1.0l", category: "Sharbatlar", price: 9990, oldPrice: 12655, rating: 4.2, image: "14.jpg", emoji: "🥤" },
  { id: 15, name: "Chartak 0.5l", category: "Suvlar", price: 11990, oldPrice: 119990, rating: 4.8, image: "15.jpg", emoji: "🥤" },
  { id: 16, name: "Mani 0.5l", category: "Ichimliklar", price: 4500, oldPrice: 6000, rating: 4.4, image: "16.jpg", emoji: "🥤" },
  { id: 17, name: "Borjomi 0.5l", category: "Suvlar", price: 15990, oldPrice: 18633, rating: 4.4, image: "17.jpg", emoji: "🥤" },
  { id: 18, name: "Cola 0.5l", category: "Cocacola", price: 6990, oldPrice: 72990, rating: 4.9, image: "18.jpg", emoji: "🥤" },
  { id: 19, name: "18+ 0.5l", category: "Energetiklar", price: 9990, oldPrice: 12563, rating: 4.8, image: "19.jpg", emoji: "🥤" },
  { id: 20, name: "Dinay 0.5l", category: "Ichimliklar", price: 6990, oldPrice: 9568, rating: 4.7, image: "20.jpg", emoji: "🥤" },
  { id: 21, name: "Flash 0.25l", category: "Energetiklar", price: 7990, oldPrice: 8990, rating: 4.5, image: "21.jpg", emoji: "🥤" },
  { id: 22, name: "Tropic 1.0l", category: "Ichimliklar", price: 9990, oldPrice: 12563, rating: 4.9, image: "22.jpg", emoji: "🥤" },
  { id: 23, name: "Zjatetskiy Gus 0.5l", category: "Pivo", price: 15990, oldPrice: 17856, rating: 4.3, image: "23.jpg", emoji: "🥤" },
  { id: 24, name: "Raya 0.5l", category: "Ichimliklar", price: 5990, oldPrice: 7841, rating: 4.1, image: "24.jpg", emoji: "🥤" },
  { id: 25, name: "Mani 0.5l", category: "Ichimliklar", price: 4500, oldPrice: 6990, rating: 4.8, image: "25.jpg", emoji: "🥤" },
  { id: 26, name: "Flavis 0.5l", category: "Ichimliklar", price: 5990, oldPrice: 8365, rating: 4.8, image: "26.jpg", emoji: "🥤" },
  { id: 27, name: "Micco 0.5l", category: "Ichimliklar", price: 5990, oldPrice: 7856, rating: 4.5, image: "27.jpg", emoji: "🥤" },
  { id: 28, name: "Sarbast 0.5l", category: "Pivo", price: 11990, oldPrice: 12563, rating: 4.8, image: "28.jpg", emoji: "🥤" },
  { id: 29, name: "Kuler 0.5l", category: "Pivo", price: 15990, oldPrice: 18963, rating: 4.4, image: "29.jpg", emoji: "🥤" },
  { id: 30, name: "Mohito t 0.5l", category: "Ichimliklar", price: 9990, oldPrice: 12563, rating: 4.6, image: "30.jpg", emoji: "🥤" },
  { id: 31, name: "Adrenaline 0.5l", category: "Energetiklar", price: 14990, oldPrice: 16565, rating: 4.8, image: "31.jpg", emoji: "🥤" },
  { id: 32, name: "Time tea 1.0l", category: "Choylar", price: 5990, oldPrice: 6890, rating: 4.2, image: "32.jpg", emoji: "🥤" },
  { id: 33, name: "Bon-Aqua 1.5l", category: "Suvlar", price: 5990, oldPrice: 7800, rating: 4.8, image: "33.jpg", emoji: "🥤" },
  { id: 34, name: "Redi 1.0l", category: "Sharbatlar", price: 5990, oldPrice: 7563, rating: 4.3, image: "34.jpg", emoji: "🥤" },
  { id: 35, name: "Bold 0.5l", category: "Energetiklar", price: 9990, oldPrice: 12563, rating: 4.4, image: "35.jpg", emoji: "🥤" },
  { id: 36, name: "Fanta 0.5l", category: "Cocacola", price: 6990, oldPrice: 8990, rating: 4.8, image: "36.jpg", emoji: "🥤" },
  { id: 37, name: "Tropic 0.5l", category: "Ichimliklar", price: 5990, oldPrice: 7800, rating: 4.9, image: "37.jpg", emoji: "🥤" },
  { id: 38, name: "Muzy 1.0l", category: "Choylar", price: 8990, oldPrice: 12563, rating: 4.1, image: "38.jpg", emoji: "🥤" },
  { id: 39, name: "Mohito 0.5l", category: "Ichimliklar", price: 11990, oldPrice: 12563, rating: 4.5, image: "39.jpg", emoji: "🥤" },
  { id: 40, name: "Mohito 0.5l", category: "Ichimliklar", price: 11990, oldPrice: 12563, rating: 4.8, image: "40.jpg", emoji: "🥤" },
  { id: 41, name: "Eco 0.5l", category: "Suvlar", price: 990, oldPrice: 4856, rating: 4.8, image: "41.jpg", emoji: "🥤" },
  { id: 42, name: "Flavis 1.25l", category: "Ichimliklar", price: 9990, oldPrice: 12563, rating: 4.2, image: "42.jpg", emoji: "🥤" },
  { id: 43, name: "Sprayt 1.5l", category: "Cocacola", price: 12990, oldPrice: 16333, rating: 4.8, image: "43.jpg", emoji: "🥤" },
  { id: 44, name: "Sprayt 1.0l", category: "Cocacola", price: 9990, oldPrice:11200 , rating: 4.6, image: "44.jpg", emoji: "🥤" },
  { id: 45, name: "Cola 0.25l", category: "Cocacola", price: 3990, oldPrice: 5990, rating: 4.4, image: "45.jpg", emoji: "🥤" },
  { id: 46, name: "Toshkent suv (r) 0.5l", category: "Suvlar", price: 5990, oldPrice: 6896, rating: 4.7, image: "46.jpg", emoji: "🥤" },
  { id: 47, name: "Tuborg 0.5l", category: "Pivo", price: 14990, oldPrice: 15696, rating: 4.8, image: "47.jpg", emoji: "🥤" },
  { id: 48, name: "Tuborg 0.5l", category: "Pivo", price: 16990, oldPrice: 18965, rating: 4.8, image: "48.jpg", emoji: "🥤" },
  { id: 49, name: "Sarbast 0.5l", category: "Pivo", price: 11990, oldPrice: 13555, rating: 4.9, image: "49.jpg", emoji: "🥤" },
  { id: 50, name: "Baltika 7", category: "Pivo", price: 14990, oldPrice: 17890, rating: 4.5, image: "50.jpg", emoji: "🥤" },
  { id: 51, name: "Vino 54", category: "Vino", price: 11990, oldPrice: 13990, rating: 4.7, image: "51.jpg", emoji: "🥤" },
  { id: 52, name: "Kagor", category: "Vino", price: 49990, oldPrice: 56333, rating: 4.1, image: "52.jpg", emoji: "🥤" },
  { id: 53, name: "Nestle Santal 1.5l", category: "Suvlar", price: 3990, oldPrice: 5696, rating: 4.8, image: "53.jpg", emoji: "🥤" },
  { id: 54, name: "Xumson 1.0l", category: "Suvlar", price: 3990, oldPrice: 5632, rating: 4.6, image: "54.jpg", emoji: "🥤" },
  { id: 55, name: "Fuse tea 1.0l", category: "Choylar", price: 9990, oldPrice: 12365, rating: 4.5, image: "55.jpg", emoji: "🥤" },
  { id: 56, name: "Fuse tea 0.5l", category: "Choylar", price: 5990, oldPrice: 6700, rating: 4.5, image: "56.jpg", emoji: "🥤" },
  { id: 57, name: "Ark tea 1.25l", category: "Choylar", price: 9990, oldPrice: 12566, rating: 4.3, image: "57.jpg", emoji: "🥤" },
  { id: 58, name: "Ark tea 0.5l", category: "Choylar", price: 4990, oldPrice: 5896, rating: 4.8, image: "58.jpg", emoji: "🥤" },
  { id: 59, name: "Flash 0.5l", category: "Energetiklar", price: 9990, oldPrice: 11569, rating: 4.7, image: "59.jpg", emoji: "🥤" },
  { id: 60, name: "Hudrolife 1.5l", category: "Suvlar", price: 3990, oldPrice:  4596, rating: 4.8, image: "60.jpg", emoji: "🥤" },
  { id: 62, name: "Redi 0.27l", category: "Choylar", price: 1990, oldPrice: 1869, rating: 4.8, image: "62.jpg", emoji: "🥤" },
  { id: 63, name: "M2 limonad", category: "Ichimliklar", price: 6990, oldPrice: 7896, rating: 4.9, image: "63.jpg", emoji: "🥤" },
  { id: 64, name: "Chartak 1.5l", category: "Suvlar", price: 4990, oldPrice: 5866, rating: 4.2, image: "64.jpg", emoji: "🥤" },
  { id: 65, name: "Sitro 0.5l", category: "Energetiklar", price: 2990, oldPrice: 3699, rating: 4.1, image: "65.jpg", emoji: "🥤" },
  { id: 66, name: "Eco 1.5l", category: "Suvlar", price: 2990, oldPrice: 3666, rating: 4.5, image: "66.jpg", emoji: "🥤" },
  { id: 67, name: "Barlos 2.5l", category: "Pivo", price: 29990, oldPrice: 35555, rating: 4.7, image: "67.jpg", emoji: "🥤" },
  { id: 68, name: "Endless 0.5l", category: "Suvlar", price: 2990, oldPrice: 3566, rating: 4.8, image: "68.jpg", emoji: "🥤" },
  { id: 69, name: "Eccentuki 0.5l", category: "Suvlar", price: 16990, oldPrice: 17563, rating: 4.9, image: "69.jpg", emoji: "🥤" },
  { id: 70, name: "Buratino 0.5l", category: "Ichimliklar", price: 9990, oldPrice: 11800, rating: 4.3, image: "70.jpg", emoji: "🥤" },
]

const $ = selector => document.querySelector(selector);

const grid = $("#productsGrid");
const searchInput = $("#searchInput");
const categoryNav = $("#categoryNav");
const sortSelect = $("#sortSelect");
const cartItems = $("#cartItems");
const toast = $("#toast");
const cartSection = $("#cartSection");
const overlay = $("#panelOverlay");

const formatMoney = amount =>
  Number(amount).toLocaleString("uz-UZ") + " so‘m";

let activeCategory = "Barchasi";
let searchTerm = "";
let toastTimer;

/* ===== MA'LUMOTLARNI SAQLASH ===== */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function loadCart() {
  const saved = readStorage("market-cart", {});
  const result = {};

  if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
    return result;
  }

  products.forEach(product => {
    const quantity = saved[product.id];

    if (Number.isSafeInteger(quantity) && quantity > 0 && quantity <= 99) {
      result[product.id] = quantity;
    }
  });

  return result;
}

let cart = loadCart();

let profile = readStorage("market-profile", {});
if (!profile || typeof profile !== "object" || Array.isArray(profile)) {
  profile = {};
}

function saveCart() {
  try {
    localStorage.setItem("market-cart", JSON.stringify(cart));
  } catch {
    showToast("Savatni saqlash imkoni bo‘lmadi.");
  }
}

function saveProfile() {
  try {
    localStorage.setItem("market-profile", JSON.stringify(profile));
  } catch {
    showToast("Profilni saqlash imkoni bo‘lmadi.");
  }
}

/* ===== XABAR ===== */

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ===== MAHSULOT RASMI ===== */

function productImage(product) {
  if (product.image) {
    return `
      <img src="${product.image}"
           alt="${product.name}"
           loading="lazy"
           onerror="this.style.display='none'">
    `;
  }

  return `<span class="product-emoji">${product.emoji || "🥤"}</span>`;
}

/* ===== MAHSULOTLAR ===== */

function renderProducts() {
  let filtered = products.filter(product => {
    const categoryMatch =
      activeCategory === "Barchasi" ||
      product.category === activeCategory;

    const searchMatch = product.name
      .toLocaleLowerCase("uz")
      .includes(searchTerm.toLocaleLowerCase("uz"));

    return categoryMatch && searchMatch;
  });

  if (sortSelect.value === "cheap") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortSelect.value === "expensive") {
    filtered.sort((a, b) => b.price - a.price);
  }

  $("#emptyState").hidden = filtered.length > 0;

  grid.innerHTML = filtered.map(product => {
    // Eski narx yangi narxdan katta bo'lsagina chegirma ko'rsatiladi.
    const hasDiscount = product.oldPrice > product.price;
    const discount = hasDiscount
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

    return `
      <article class="product-card">
        <div class="product-image">
          ${productImage(product)}
          ${hasDiscount ? `<span class="discount">-${discount}%</span>` : ""}
        </div>

        <div class="product-info">
          <div class="rating">⭐ ${product.rating} · 5</div>
          <h3 class="product-name">${product.name}</h3>

          ${hasDiscount
            ? `<div class="old-price">${formatMoney(product.oldPrice)}</div>`
            : ""}

          <div class="product-price">${formatMoney(product.price)}</div>

          <span class="installment">
            ${formatMoney(Math.ceil(product.price / 12))} / oy
          </span>

          <button class="add-btn" data-add="${product.id}" type="button">
            + Savatchaga
          </button>
        </div>
      </article>
    `;
  }).join("");
}

/* ===== SAVAT HISOBI ===== */

function cartCount() {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function cartTotal() {
  return products.reduce(
    (sum, product) => sum + product.price * (cart[product.id] || 0),
    0
  );
}

function renderCart() {
  const entries = products.filter(product => (cart[product.id] || 0) > 0);

  $("#cartCount").textContent = cartCount();
  $("#summaryCount").textContent = cartCount();
  $("#cartTotal").textContent = formatMoney(cartTotal());

  if (!entries.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Savatchangiz bo‘sh</h3>
        <p>Mahsulot tanlab savatga qo‘shing.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = entries.map(product => `
    <div class="cart-item">
      <div class="cart-item-icon">${productImage(product)}</div>

      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <p>${formatMoney(product.price * cart[product.id])}</p>
      </div>

      <div class="quantity-controls">
        <button type="button" data-decrease="${product.id}" aria-label="Kamaytirish">−</button>
        <span>${cart[product.id]}</span>
        <button type="button" data-increase="${product.id}" aria-label="Ko‘paytirish">+</button>
      </div>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  if ((cart[id] || 0) >= 99) {
    showToast("Bir mahsulotdan ko‘pi bilan 99 ta olish mumkin.");
    return;
  }

  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  showToast(product.name + " savatga qo‘shildi!");
}

function changeQuantity(id, amount) {
  const next = (cart[id] || 0) + amount;

  if (next <= 0) {
    delete cart[id];
  } else if (next <= 99) {
    cart[id] = next;
  } else {
    showToast("Eng ko‘p miqdor — 99 ta.");
    return;
  }

  saveCart();
  renderCart();
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const minus = event.target.closest("[data-decrease]");
  const plus = event.target.closest("[data-increase]");

  if (minus) changeQuantity(Number(minus.dataset.decrease), -1);
  if (plus) changeQuantity(Number(plus.dataset.increase), 1);
});

$("#clearCartBtn").addEventListener("click", () => {
  cart = {};
  saveCart();
  renderCart();
  showToast("Savat tozalandi.");
});

/* ===== SAVATNI OCHISH VA YOPISH ===== */

function openCart() {
  cartSection.classList.add("cart-open");
  overlay.classList.add("overlay-open");
  document.body.classList.add("panel-locked");

  cartSection.setAttribute("aria-hidden", "false");
  $("#cartBtn").setAttribute("aria-expanded", "true");
}

function closeCart() {
  cartSection.classList.remove("cart-open");
  overlay.classList.remove("overlay-open");
  document.body.classList.remove("panel-locked");

  cartSection.setAttribute("aria-hidden", "true");
  $("#cartBtn").setAttribute("aria-expanded", "false");
}

$("#cartBtn").addEventListener("click", () => {
  cartSection.classList.contains("cart-open") ? closeCart() : openCart();
});

$("#closeCartBtn").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();

    document.querySelectorAll("dialog[open]").forEach(dialog => {
      dialog.close();
    });
  }
});

/* ===== QIDIRUV VA KATEGORIYALAR ===== */

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderProducts();
});

$("#searchBtn").addEventListener("click", () => {
  searchTerm = searchInput.value.trim();
  renderProducts();
  $("#productsSection").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") $("#searchBtn").click();
});

categoryNav.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  categoryNav.querySelectorAll(".category").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderProducts();
});

sortSelect.addEventListener("change", renderProducts);

$("#shopBtn").addEventListener("click", () => {
  $("#productsSection").scrollIntoView({ behavior: "smooth" });
});

$("#catalogBtn").addEventListener("click", () => {
  $("#categoryNav").scrollIntoView({ behavior: "smooth" });
});

/* ===== PROFIL ===== */

function updateProfileButton() {
  $("#loginBtn").textContent = profile.name
    ? "👤 " + profile.name.trim().split(/\s+/)[0]
    : "👤 Profil";
}

function openProfile() {
  $("#profileName").value = profile.name || "";
  $("#profilePhone").value = profile.phone || "";
  $("#profileAddress").value = profile.address || "";
  $("#loginDialog").showModal();
}

$("#loginBtn").addEventListener("click", openProfile);

$("#profileForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#profileName").value.trim();
  const phone = $("#profilePhone").value.trim();
  const address = $("#profileAddress").value.trim();

  if (name.length < 2) {
    showToast("Ism va familiyangizni kiriting.");
    return;
  }

  if (phone.replace(/\D/g, "").length < 9) {
    showToast("Telefon raqamini tekshiring.");
    return;
  }

  profile = { name, phone, address };
  saveProfile();
  updateProfileButton();
  $("#loginDialog").close();
  showToast("Profil saqlandi!");
});

/* ===== MODAL OYNALARINI YOPISH ===== */

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.close);
    if (dialog) dialog.close();
  });
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});

/* ===== BUYURTMA RASMIYLASHTIRISH ===== */

function openCheckout() {
  if (cartCount() === 0) {
    showToast("Avval savatga mahsulot qo‘shing.");
    return;
  }

  const summary = $("#checkoutSummary");
  const entries = products.filter(product => (cart[product.id] || 0) > 0);

  summary.innerHTML = `
    <div class="checkout-summary">
      <h3>Buyurtma tarkibi</h3>

      ${entries.map(product => `
        <div class="checkout-summary-row">
          <span>${product.name} × ${cart[product.id]}</span>
          <strong>${formatMoney(product.price * cart[product.id])}</strong>
        </div>
      `).join("")}

      <div class="checkout-summary-row checkout-summary-total">
        <span>Jami</span>
        <strong>${formatMoney(cartTotal())}</strong>
      </div>
    </div>
  `;

  $("#customerName").value = profile.name || "";
  $("#customerPhone").value = profile.phone || "";
  $("#customerAddress").value = profile.address || "";
  $("#customerNote").value = "";

  $("#checkoutDialog").showModal();
}

$("#checkoutBtn").addEventListener("click", openCheckout);

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  if (cartCount() === 0) {
    showToast("Savatcha bo‘sh.");
    $("#checkoutDialog").close();
    return;
  }

  const name = $("#customerName").value.trim();
  const phone = $("#customerPhone").value.trim();
  const address = $("#customerAddress").value.trim();
  const note = $("#customerNote").value.trim();

  if (name.length < 2) {
    showToast("Ism va familiyangizni kiriting.");
    return;
  }

  if (phone.replace(/\D/g, "").length < 9) {
    showToast("Telefon raqamini tekshiring.");
    return;
  }

  if (address.length < 5) {
    showToast("Yetkazib berish manzilini to‘liq kiriting.");
    return;
  }

  const order = {
    number: "MOQ-" + Date.now().toString().slice(-8),
    date: new Date().toISOString(),
    customer: { name, phone, address, note },
    items: products
      .filter(product => (cart[product.id] || 0) > 0)
      .map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: cart[product.id]
      })),
    total: cartTotal(),
    status: "Demo — serverga yuborilmagan"
  };

  const previousOrders = readStorage("market-demo-orders", []);
  const orders = Array.isArray(previousOrders) ? previousOrders : [];

  orders.push(order);

  try {
    localStorage.setItem("market-demo-orders", JSON.stringify(orders));
    profile = { name, phone, address };
    saveProfile();
  } catch {
    showToast("Ma’lumotni saqlashda xatolik yuz berdi.");
    return;
  }

  updateProfileButton();
  $("#checkoutDialog").close();
  closeCart();

  cart = {};
  saveCart();
  renderCart();

  $("#resultContent").innerHTML = `
    <div class="order-success">
      <div class="success-icon">🧾</div>
      <h2>Demo buyurtma yaratildi!</h2>
      <p>Buyurtma raqami:</p>
      <span class="order-number">${order.number}</span>
      <p><strong>Jami:</strong> ${formatMoney(order.total)}</p>
      <p class="form-note">
        Bu sinov buyurtmasi. U do‘konga yuborilmadi.
        Haqiqiy buyurtmalar uchun server yoki Telegram bot kerak.
      </p>
      <button type="button" class="checkout-btn" id="finishOrderBtn">
        Tushunarli
      </button>
    </div>
  `;

  $("#resultDialog").showModal();

  $("#finishOrderBtn").addEventListener("click", () => {
    $("#resultDialog").close();
  }, { once: true });
});

/* ===== YIL VA BOSHLANG‘ICH HOLAT ===== */

$("#year").textContent = new Date().getFullYear();

updateProfileButton();
renderProducts();
renderCart();


/* ===== PROFILDA BUYURTMALAR TARIXI ===== */

function escapeProfileText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function renderProfileOrders() {
  const container = $("#profileOrdersList");
  if (!container) return;

  const saved = readStorage("market-demo-orders", []);
  const orders = Array.isArray(saved) ? [...saved].reverse() : [];

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="profile-empty">
        <div style="font-size:42px">📦</div>
        <h3>Hozircha buyurtmalar yo‘q</h3>
        <p>Buyurtma berganingizdan keyin shu yerda ko‘rinadi.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => `
    <article class="profile-order">
      <div class="profile-order-head">
        <div>
          <strong>${escapeProfileText(order.number)}</strong>
          <p class="profile-order-date">
            ${order.date
              ? new Date(order.date).toLocaleDateString("uz-UZ")
              : ""}
          </p>
        </div>
        <span class="profile-order-status">
          ${escapeProfileText(order.status || "Qabul qilindi")}
        </span>
      </div>

      <div class="profile-order-products">
        ${(Array.isArray(order.items) ? order.items : []).map(item => `
          <p>
            ${escapeProfileText(item.name)}
            × ${Number(item.quantity) || 0}
          </p>
        `).join("")}
      </div>

      <div class="profile-order-total">
        <span>Jami:</span>
        <strong>${formatMoney(Number(order.total) || 0)}</strong>
      </div>
    </article>
  `).join("");
}

/* ===== PROFIL TUGMALARI ===== */

function showProfileTab(tab) {
  const info = $("#profileInfoPanel");
  const orders = $("#profileOrdersPanel");

  if (!info || !orders) return;

  info.hidden = tab !== "info";
  orders.hidden = tab !== "orders";

  document.querySelectorAll(".profile-tab").forEach(button => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });

  if (tab === "orders") {
    renderProfileOrders();
  }
}

document.querySelectorAll(".profile-tab").forEach(button => {
  button.addEventListener("click", () => {
    showProfileTab(button.dataset.tab);
  });
});

/* ===== PROFIL OCHILGANDA MA'LUMOTLARNI YUKLASH ===== */

const originalOpenProfile = openProfile;

openProfile = function () {
  originalOpenProfile();
  showProfileTab("info");

  $("#profileDisplayName").textContent =
    profile.name || "Mening profilim";

  $("#profileDisplayPhone").textContent =
    profile.phone || "Telefon raqami kiritilmagan";

  $("#profileAvatar").textContent =
    profile.name ? profile.name.trim().charAt(0).toUpperCase() : "M";

  renderProfileOrders();
};

