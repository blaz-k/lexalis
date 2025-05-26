<template>
	<div class="contact-page py-5">
	  <div class="container text-center">
		<img
		  src="../img/Lexalis_logo_black_1.png"
		  alt="Lexalis logo"
		  class="mb-4"
		  style="max-width: 160px"
		  data-aos="fade-up"
		/>
		<h1 class="fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">Kontakt</h1>
  
		<div class="fs-5 mb-4" data-aos="fade-up" data-aos-delay="200">
		  <p><strong>Delovni čas:</strong> Pon–Pet: 9:00–15:00 | Sob: 11:00–13:00</p>
		  <p><strong>Telefon:</strong> <a href="tel:+38631531078">+386 31 531 078</a></p>
		  <p><strong>Email:</strong> <a href="mailto:urska@lexalis.si">urska@lexalis.si</a></p>
		</div>
  
		<!-- NOVO: dodatno sporočilo -->
		<div class="fs-5 mt-5 p-4 bg-light rounded border" data-aos="fade-up" data-aos-delay="300">
			<p><strong>Potrebujete pomoč?</strong></p>
		  <p>
			Če iščete hitro rešitev, nas prosim kontaktirajte na telefonsko številko.
			Imate vprašanja? Potrebujete prevod ali pravno svetovanje? Pišite nam in dogovorili se
			bomo za posvet.
		  </p>
		</div>
	  </div>
	</div>
  </template>
  

<!-- <template>
  <div class="contact-page py-5">
    <div class="container text-center">
      <img
        src="../img/Lexalis_logo_black_1.png"
        alt="Lexalis logo"
        class="mb-4"
        style="max-width: 160px"
        data-aos="fade-up"
      />
      <h1 class="fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">Kontakt</h1>
      <div class="fs-5" data-aos="fade-up" data-aos-delay="200">
        <p><strong>Delovni čas:</strong> Pon–Pet: 9:00–15:00 | Sob: 11:00–13:00</p>
        <p><strong>Telefon:</strong> <a href="tel:+38631531078">+386 31 531 078</a></p>
        <p><strong>Email:</strong> <a href="mailto:urska@lexalis.si">urska@lexalis.si</a></p>
      </div>
    </div>
  </div>
</template> -->

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Kontakt | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Kontaktirajte nas za hitro in zanesljivo pravno-jezikovno storitev. Dosegljivi smo prek telefona ali e-pošte.'
    }
  ]
})
</script>
<style scoped>
.contact-page a {
  color: #000 !important;
  text-decoration: none;
}

.contact-page a:hover {
  color: #333 !important;
  text-decoration: underline;
}
</style>