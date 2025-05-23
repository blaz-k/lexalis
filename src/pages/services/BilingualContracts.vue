<template>
  <div class="service-detail py-5">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold" data-aos="fade-up">Sestava dvojezičnih pogodb in aktov</h1>

      <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          alt="Dvojezične pogodbe"
          class="img-fluid rounded shadow"
          style="max-height: 300px"
        />
      </div>

      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p>
          Dvojezični pravni dokumenti zahtevajo natančnost in usklajenost med jeziki.
          Pripravimo dokumente, ki so pravno veljavni in razumljivi v obeh jezikih.
        </p>

        <h3 class="mt-5 mb-4 fw-bold">Kaj vključuje:</h3>

<div class="row">
  <div class="col-md-12" data-aos="fade-up" data-aos-delay="300">
    <ul class="ps-3">

              <li>Sestava dvojezičnih pogodb (npr. za mednarodne posle)</li>
              <li>Priprava dvojezičnih statutov in aktov podjetij</li>
              <li>Prilagoditev dokumentov za mednarodno uporabo</li>
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
  title: 'Dvojezične pogodbe in akti | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Priprava pravno usklajenih dvojezičnih pogodb in aktov za mednarodne potrebe.'
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



<!-- <template>
	<div class="service-detail py-5">
		<div class="container">
			<h1 class="text-center mb-4 fw-bold" data-aos="fade-up">{{ title }}</h1>

			<div class="text-center mb-4" data-aos="fade-up" data-aos-delay="100">
				<img
				:src="image"
				alt="Prevodi letnih poročil"
				class="img-fluid rounded shadow"
				style="max-height: 300px"
				/>
			</div>

			<div class="fs-5" data-aos="fade-up" data-aos-delay="200">
				<p>
				Tukaj je vsebina storitve – besedilo povzamemo iz Word dokumenta. Vključuje ključne informacije,
				vezane na to storitev, predstavljene pregledno in strokovno.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AnnualReports', // prilagodi glede na ime datoteke
		data() {
			return {
			title: 'Prevodi letnih poročil', // prilagodi za vsako
			image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be' // ali lokalno sliko
			}
		}
	}
</script> -->