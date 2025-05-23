<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">Lexalis</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Domov</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">O nas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Storitve</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Ni logike
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}
.nav-link.router-link-exact-active {
  color: #0d6efd;
}
</style>
