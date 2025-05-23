<template>
  <div class="home-page">
    <section class="hero-section py-5 bg-light" data-aos="fade-up">
      <div class="container text-center">
        <img src="../img/Lexalis_logo_black_1.png" alt="Lexalis logo" class="mb-4" style="max-width: 180px;">
        <h1 class="display-5 fw-bold">Jezikovna natančnost za pravno zanesljivost.</h1>
        <p class="lead mt-3">
          Pravni dokumenti zahtevajo več kot le prevod – zahtevajo razumevanje jezika in zakonodaje.
        </p>
      </div>
    </section>

    <section class="features-section py-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Pravna natančnost</h5>
                <p class="card-text">Specializirani smo za prevode, ki ohranijo pravno moč in veljavnost.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Več kot 8 let izkušenj</h5>
                <p class="card-text">Zaupajo nam odvetniki, podjetja in javne ustanove.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Pravni in jezikovni strokovnjaki</h5>
                <p class="card-text">Združujemo pravno znanje in jezikovno odličnost za vrhunske rezultate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Domov | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Lexalis ponuja vrhunske pravne prevode in svetovanje. Zanesljiv partner za jezikovno in pravno odličnost.'
    }
  ]
})
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}
</style>