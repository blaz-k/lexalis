<template>
  <footer class="footer-page bg-light border-top py-4 mt-5">
    <div class="container text-center text-muted">
      <p class="mb-1">&copy; {{ new Date().getFullYear() }} Lexalis. Vse pravice pridržane.</p>
      <small>Izdelava: <a href="https://github.com/blaz-k" target="_blank">Kmeto</a></small>
    </div>
  </footer>
</template>

<script setup>
// Ni logike
</script>

<style scoped>
.footer-page a {
  color: #000 !important;
  text-decoration: none;
}

.footer-page a:hover {
  color: #333 !important;
  text-decoration: underline;
}

</style>