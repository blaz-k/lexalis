<template>
	<div class="services-page py-5">
		<div class="container">
		<h1 class="text-center mb-5 fw-bold" data-aos="fade-up">Naše Storitve</h1>

		<div class="row gy-4">
  <div
    class="col-md-6 col-lg-4"
    v-for="(service, index) in services"
    :key="service.title"
    data-aos="fade-up"
  >
    <router-link :to="service.link" class="text-decoration-none text-dark">
      <div class="card h-100 shadow-sm">
        <img :src="service.image" class="card-img-top" :alt="service.title" loading="lazy"/>
        <div class="card-body">
          <h5 class="card-title">{{ service.title }}</h5>
          <p class="card-text">{{ service.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</div>
		</div>
	</div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
// import { ref } from 'vue'
import { ref, onMounted, nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slika1 from '../img/blog/1.jpg'
import Slika2 from '../img/blog/2.jpg'
import Slika3 from '../img/blog/3.jpg'
import Slika4 from '../img/our-team/1.jpg'
import Slika5 from '../img/our-team/2.jpg'
import Slika6 from '../img/our-team/4.jpg'

useHead({
  title: 'Storitve | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Ponujamo vrhunske jezikovne in pravne storitve – od prevodov do pravnega svetovanja, lektoriranja in več.'
    }
  ]
})

const services = ref([
  {
    title: 'Prevodi pravnih dokumentov',
    description: 'Pogodbe, akti, sodne odločbe in drugi ključni dokumenti – natančno in pravno skladno.',
    image: Slika1,
    link: '/services/legal-translations'
  },
  {
    title: 'Pravno svetovanje',
    description: 'Svetujemo pri pravnih vprašanjih in dokumentih za domače in mednarodno poslovanje.',
    image: Slika2,
    link: '/services/legal-consulting'
  },
  {
    title: 'Dvojezične pogodbe in akti',
    description: 'Priprava dokumentov v slovenščini in angleščini – pravno usklajeno in razumljivo.',
    image: Slika3,
    link: '/services/bilingual-contracts'
  },
  {
    title: 'Prevodi letnih poročil',
    description: 'Jasno in strokovno predstavljeni rezultati vašega podjetja za tuje trge.',
    image: Slika4,
    link: '/services/annual-reports'
  },
  {
    title: 'Lektoriranje',
    description: 'Poskrbimo za jezikovno brezhibnost in pravno ustreznost vseh vaših dokumentov.',
    image: Slika5,
    link: '/services/proofreading'
  },
  {
    title: 'Druge storitve',
    description: 'Prevodi spletnih strani, sodelovanje pri mednarodnih projektih in pravnih sporih.',
    image: Slika6,
    link: '/services/other'
  }
])


// onMounted(() => {
//   nextTick(() => {
//     AOS.refresh()
//   })
// })
</script>


<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px) scale(1.07);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  width: 100%;
}
</style>