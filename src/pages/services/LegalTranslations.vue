<template>
  <div class="service-detail py-5">
    <div class="container">
      <h1 class="text-center mb-4 fw-bold" data-aos="fade-up">Prevodi pravnih dokumentov</h1>

      <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <img
          src="https://images.unsplash.com/photo-1555375771-5c9adf0d3fba"
          alt="Prevodi pravnih dokumentov"
          class="img-fluid rounded shadow"
          style="max-height: 300px"
        />
      </div>

      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p>
          Pravni dokumenti zahtevajo natančnost in razumevanje pravne terminologije v obeh jezikih.
          Specializirani smo za pravno terminologijo in zagotavljamo, da prevodi upoštevajo pravne standarde.
        </p>

		<h3 class="mt-5 mb-3 fw-bold">Kaj vključuje:</h3>
			<div class="row">
				<div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
					<h5 class="fw-bold fs-5">1. Prevodi pogodb</h5>
					<ul>
					<li>Kupoprodajne pogodbe</li>
					<li>Najemne pogodbe</li>
					<li>Pogodbe o zaposlitvi</li>
					<li>Pogodbe o poslovnem sodelovanju</li>
					<li>Itp.</li>
					</ul>
				</div>
				<div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
					<h5 class="fw-bold fs-5">2. Prevodi pravnih aktov</h5>
					<ul>
					<li>Statuti in akti podjetij</li>
					<li>Pravilniki in interni akti</li>
					<li>Druge pravne listine</li>
					</ul>
				</div>
				<div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="500">
					<h5 class="fw-bold fs-5">3. Prevodi sodnih dokumentov in odločb</h5>
					<ul>
					<li>Tožbe in odgovori</li>
					<li>Sodne odločbe</li>
					<li>Dokazni dokumenti</li>
					</ul>
				</div>
				</div>
			</div>

			<div class="fs-5 mt-5 p-4 bg-light rounded shadow-sm" data-aos="fade-up" data-aos-delay="600">
				<h4 class="mb-3">Kako delamo?</h4>
				<ol class="ps-3">
				<li><strong>Oddaja dokumenta / posvet s stranko:</strong> Dokument prejmete po e-pošti ali se dogovorimo za posvet.</li>
				<li><strong>Brezplačna ocena:</strong> Pripravimo ponudbo s ceno in rokom izvedbe.</li>
				<li><strong>Prevajanje:</strong> Izvedemo prevod z upoštevanjem pravnih standardov.</li>
				<li><strong>Pregled:</strong> Preverimo jezikovno in pravno skladnost.</li>
				<li><strong>Dostava:</strong> Končni dokument vam pošljemo v dogovorjeni obliki in roku.</li>
				</ol>
			</div>
    	</div>
  	</div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Prevodi pravnih dokumentov | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Prevajamo pogodbe, sodne odločbe in pravne akte z najvišjo natančnostjo.'
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