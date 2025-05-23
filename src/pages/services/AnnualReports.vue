<template>
  <div class="service-detail py-5">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold" data-aos="fade-up">Prevodi letnih poročil</h1>

      <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Prevodi letnih poročil"
          class="img-fluid rounded shadow"
          style="max-height: 300px"
        />
      </div>

      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p>
          Letno poročilo je ogledalo vašega podjetja – dokument, ki odraža vašo poslovno uspešnost,
          dosežke in strategijo. Njegova kakovostna predstavitev v tujem jeziku je ključnega pomena
          za pridobivanje zaupanja mednarodnih partnerjev, vlagateljev in javnosti.
        </p>

        <p>
          S storitvijo prevajanja letnih poročil že več let zapored uspešno sodelujemo z vodilnimi
          slovenskimi podjetji in jim pomagamo zgraditi močno prisotnost na globalnih trgih.
        </p>

        <h3 class="mt-5 mb-4 fw-bold">Zakaj izbrati nas za prevajanje letnih poročil?</h3>

        <div class="row">
          <div class="col-md-12" data-aos="fade-up" data-aos-delay="300">
            <ul class="ps-3">
              <li><strong>Izkušnje z vodilnimi slovenskimi podjetji:</strong> Naše prevode letnih poročil uporabljajo številna ugledna podjetja, vključno z največjimi v Sloveniji.</li>
              <li><strong>Strokovnost in kakovost:</strong> Združujemo znanje iz finančnega, pravnega in jezikovnega področja za brezhibne prevode.</li>
              <li><strong>Prilagodljivost:</strong> Prilagodimo se vašim časovnim okvirjem in potrebam, tudi pri najzahtevnejših projektih.</li>
              <li><strong>Diskretnost in zaupanje:</strong> Z vašimi podatki ravnamo z največjo mero varnosti in zaupnosti.</li>
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
  title: 'Prevodi letnih poročil | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Kakovostni prevodi letnih poročil za pridobivanje zaupanja tujih partnerjev.'
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
