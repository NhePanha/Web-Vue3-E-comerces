<template>
  <header class="border-bottom shadow-lg">
    <nav
      class="container d-flex justify-content-between align-items-center py-3"
    >
      <!-- Logo -->
      <div class="d-flex align-items-center fw-bold fs-4">
        <span class="text-dark">P</span>
        <span class="text-dark">Skin Care</span>
        <span class="text-danger ms-1"></span>
      </div>

      <!-- Navigation Links -->
      <ul class="nav sticky-lg-top">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop" class="nav-link">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pages" class="nav-link">Pages</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/detail" class="nav-link">Detail</router-link>
        </li>
      </ul>

      <!-- Icons -->
      <div class="d-flex align-items-center gap-3">
        <button class="icon-btn">🔍</button>
        <button class="icon-btn">❤️</button>
        <button class="icon-btn position-relative">
          🛍️
          <span class="cart-badge">0</span>
        </button>
        <span class="fs-5 fw-bold price-text">$0.00</span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Header Styling */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(to right, #ffffffff, #fefefeff);
  box-shadow: rgb(38, 0, 255) 0px 48px 100px 0px;
  padding: 10px 0;
}

/* Navigation Styling */
.nav-link {
  position: relative;
  font-weight: 500;
  color: #333 !important;
  transition: all 0.3s ease;
  padding: 8px 15px;
}
.nav-link:hover {
  color: red !important;
}

.router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: red;
  transition: width 0.3s ease;
}

/* Icons Styling */
.icon-btn {
  background: transparent;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-btn:hover {
  color: red;
  transform: scale(1.1);
}

/* Cart Badge */
.cart-badge {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 7px;
  border-radius: 50%;
}

/* Price Text */
.price-text {
  font-weight: bold;
  color: #444;
}
text {
  text-decoration: none;
}
</style>
