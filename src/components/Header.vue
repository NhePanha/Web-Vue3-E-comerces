<template>
  <header class="border-bottom">
    <nav class="container d-flex justify-content-between align-items-center py-3">
      <!-- Logo -->
      <div class="d-flex align-items-center fw-bold fs-4">
        <span class="text-dark">M</span>
        <span class="text-dark">ale fashion</span>
        <span class="text-danger ms-1">■</span>
      </div>

      <!-- Navigation Links -->
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">About</router-link>
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
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
      </ul>

      <!-- Icons -->
      <div class="d-flex align-items-center gap-3">
        <button class="btn btn-outline-secondary border-0">
          🔍
        </button>
        <button class="btn btn-outline-secondary border-0">
          ❤️
        </button>
        <button class="btn btn-outline-secondary border-0 position-relative">
          🛍️
          <span class="position-absolute top-0 start-100 translate-middle badge bg-dark text-white rounded-pill">
            0
          </span>
        </button>
        <span class="fs-5 fw-bold">$0.00</span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Navigation link styling */
.nav-link {
  position: relative;
  font-weight: 500;
  color: black !important;
  transition: color 0.3s ease;
}

.nav-link:hover,
.router-link-active {
  color: black !important;
}

.router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: red;
}
</style>
