<template>
  <div class="service-detail py-5">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold" data-aos="fade-up">Pravno svetovanje</h1>

      <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          alt="Pravno svetovanje"
          class="img-fluid rounded shadow"
          style="max-height: 300px"
        />
      </div>

      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p>
          Pravni svet je kompleksen in dinamičen, zato je ključnega pomena, da imate ob sebi
          strokovnjaka, ki razume vaše potrebe in vam zagotavlja zanesljive pravne rešitve.
        </p>
        <p>
          Naša storitev pravnega svetovanja je zasnovana tako, da vam pomaga prepoznati priložnosti,
          obvladovati tveganja in učinkovito rešiti pravne izzive.
        </p>

        <h3 class="mt-5 mb-4 fw-bold">Kaj vključuje naše pravno svetovanje?</h3>

        <div class="row">
          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <h5 class="fw-bold fs-5">1. Sestava in pregled pravnih dokumentov</h5>
            <ul>
              <li>Sestava ali pregled pogodb, aktov, pravilnikov in drugih pravnih dokumentov</li>
              <li>Preverjanje skladnosti z zakonodajo in specifičnimi zahtevami panoge</li>
            </ul>
          </div>

          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <h5 class="fw-bold fs-5">2. Pravna podpora pri mednarodnem poslovanju</h5>
            <ul>
              <li>Svetovanje pri čezmejnih pogodbah</li>
              <li>Podpora pri reševanju pravnih vprašanj v mednarodnem sodelovanju</li>
            </ul>
          </div>

          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="500">
            <h5 class="fw-bold fs-5">3. Reševanje pravnih sporov</h5>
            <ul>
              <li>Podpora pri pogajanjih, mediaciji in pripravi dokumentacije</li>
              <li>Sodelovanje z odvetniškimi pisarnami za celovito podporo</li>
            </ul>
          </div>

          <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="600">
            <h5 class="fw-bold fs-5">4. Pravno svetovanje za posameznike</h5>
            <ul>
              <li>Delovnopravna in dednopravna podpora</li>
              <li>Svetovanje pri prenosu premoženja, zastopanju in oporokah</li>
              <li>Pomoč pri razumevanju pravic in pripravi strategij za reševanje sporov</li>
              <li>Priprava pogodb za nepremičnine, pooblastila za pravne namene</li>
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
  title: 'Pravno svetovanje | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Svetujemo podjetjem in posameznikom pri pravnih postopkih doma in v tujini.'
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