<template>
  <div class="service-detail py-5">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold" data-aos="fade-up">Lektoriranje</h1>

      <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Lektoriranje dokumentov"
          class="img-fluid rounded shadow"
          style="max-height: 300px"
        />
      </div>

      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p>
          Natančnost, ki šteje – vaši dokumenti brez napak. Naša storitev lektoriranja je namenjena zagotavljanju popolne jezikovne in pravne skladnosti vaših dokumentov.
        </p>

        <h3 class="mt-5 mb-4 fw-bold">Katere dokumente lektoriramo?</h3>
        <ul class="ps-3">
          <li>Pogodbe (npr. kupoprodajne, najemne, pogodbe o poslovnem sodelovanju)</li>
          <li>Pravni akti (npr. statuti, pravilniki, sklepi)</li>
          <li>Sodni dokumenti (npr. tožbe, sodbe, pritožbe)</li>
          <li>Uradni dokumenti (npr. oporoke, pooblastila, izpiski)</li>
          <li>Diplomske in magistrske naloge</li>
        </ul>

        <h3 class="mt-5 mb-4 fw-bold">Kaj vključuje storitev?</h3>
        <div class="row">
          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <h5 class="fw-bold fs-5">1. Pravopisna in slovnična natančnost</h5>
            <ul>
              <li>Popravimo vse slovnične, pravopisne in stilistične napake</li>
              <li>Poskrbimo za pravilno uporabo ločil, veliko začetnico in druge podrobnosti</li>
            </ul>
          </div>

          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <h5 class="fw-bold fs-5">2. Prilagoditev pravni terminologiji</h5>
            <ul>
              <li>Uporabljamo ustrezne pravne izraze, skladno s terminološkimi standardi</li>
            </ul>
          </div>

          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="370">
            <h5 class="fw-bold fs-5">3. Slogovna usklajenost</h5>
            <ul>
              <li>Dokument je stilistično primeren za pravni jezik</li>
              <li>Preverimo doslednost terminov skozi celotno besedilo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Lektoriranje | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Lektoriramo pravne dokumente, pogodbe, sodne listine in akademska besedila z jezikovno in pravno natančnostjo.'
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
