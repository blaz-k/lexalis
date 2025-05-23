<template>
  <div class="service-detail py-5">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold" data-aos="fade-up">Druge storitve</h1>

      <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
          alt="Druge storitve"
          class="img-fluid rounded shadow"
          style="max-height: 300px"
        />
      </div>

      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p>
          Ker razumemo, da so vaše potrebe edinstvene, nudimo tudi prilagojene storitve na področju jezika in prava.
        </p>

        <h3 class="mt-5 mb-4 fw-bold">Kaj vključuje:</h3>
        <ul class="ps-3">
          <li>Prevod spletnih strani za podjetja ali poslovne namene</li>
          <li>Sodelovanje pri mednarodnih projektih in pravnih sporih</li>
        </ul>

        <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
          <p>
            <strong>Kontaktirajte nas</strong> za individualno rešitev – z veseljem prisluhnemo vašim potrebam.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Druge storitve | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Prevodi spletnih strani, sodelovanje pri pravnih projektih in sporih – prilagojene storitve po meri.'
    }
  ]
})
</script>


<style scoped>
img {
  max-width: 100%;
  height: auto;
}
ul {
  padding-left: 1.2rem;
}
</style>
