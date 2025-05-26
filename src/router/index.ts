import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContactPage from '../pages/ContactPage.vue'

import LegalTranslations from '../pages/services/LegalTranslations.vue'
import LegalConsulting from '../pages/services/LegalConsulting.vue'
import BilingualContracts from '../pages/services/BilingualContracts.vue'
import AnnualReports from '../pages/services/AnnualReports.vue'
import Proofreading from '../pages/services/Proofreading.vue'
import Other from '../pages/services/Other.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Domov | Lexalis',
      description: 'Strokovni prevodi in pravno svetovanje. Zanesljiv partner za pravno in jezikovno odličnost.'
    }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      title: 'O nas | Lexalis',
      description: 'Spoznajte našo ekipo in vizijo. Več kot 8 let izkušenj s prevajanjem pravnih dokumentov.'
    }
  },
  {
    path: '/services',
    component: ServicesPage,
    meta: {
      title: 'Storitve | Lexalis',
      description: 'Ponujamo vrhunske jezikovne in pravne storitve – od prevodov do pravnega svetovanja.'
    }
  },
  {
    path: '/contact',
    component: ContactPage,
    meta: {
      title: 'Kontakt | Lexalis',
      description: 'Kontaktirajte nas za hitro in zanesljivo pravno-jezikovno rešitev.'
    }
  },
  {
    path: '/services/legal-translations',
    component: LegalTranslations,
    meta: {
      title: 'Prevodi pravnih dokumentov | Lexalis',
      description: 'Prevajamo pogodbe, sodne odločbe in pravne akte z najvišjo natančnostjo.'
    }
  },
  {
    path: '/services/legal-consulting',
    component: LegalConsulting,
    meta: {
      title: 'Pravno svetovanje | Lexalis',
      description: 'Svetujemo podjetjem in posameznikom pri pravnih postopkih doma in v tujini.'
    }
  },
  {
    path: '/services/bilingual-contracts',
    component: BilingualContracts,
    meta: {
      title: 'Dvojezične pogodbe in akti | Lexalis',
      description: 'Priprava pravno usklajenih dvojezičnih pogodb in aktov za mednarodne potrebe.'
    }
  },
  {
    path: '/services/annual-reports',
    component: AnnualReports,
    meta: {
      title: 'Prevodi letnih poročil | Lexalis',
      description: 'Kakovostni prevodi letnih poročil za pridobivanje zaupanja tujih partnerjev.'
    }
  },
  {
    path: '/services/proofreading',
    component: Proofreading,
    meta: {
      title: 'Lektoriranje | Lexalis',
      description: 'Lektoriramo pravne dokumente, pogodbe in diplomska dela z jezikovno in pravno natančnostjo.'
    }
  },
  {
    path: '/services/other',
    component: Other,
    meta: {
      title: 'Druge storitve | Lexalis',
      description: 'Prevodi spletnih strani, sodelovanje pri pravnih sporih in projektih – po meri vaših potreb.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})


// SEO: posodobi <title> iz meta.title
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Lexalis | Pravna in jezikovna odličnost'
  document.title = (to.meta?.title as string) || defaultTitle
  next()
})

export default router



// import { createRouter, createWebHistory } from 'vue-router'

// import HomePage from '../pages/HomePage.vue'
// import AboutPage from '../pages/AboutPage.vue'
// import ServicesPage from '../pages/ServicesPage.vue'
// import ContactPage from '../pages/ContactPage.vue'

// import LegalTranslations from '../pages/services/LegalTranslations.vue'
// import LegalConsulting from '../pages/services/LegalConsulting.vue'
// import BilingualContracts from '../pages/services/BilingualContracts.vue'
// import AnnualReports from '../pages/services/AnnualReports.vue'
// import Proofreading from '../pages/services/Proofreading.vue'
// import Other from '../pages/services/Other.vue'

// const routes = [
//   { path: '/', component: HomePage, meta: { title: 'Domov | Lexalis' } },
//   { path: '/about', component: AboutPage, meta: { title: 'O nas | Lexalis' } },
//   { path: '/services', component: ServicesPage, meta: { title: 'Storitve | Lexalis' } },
//   { path: '/contact', component: ContactPage, meta: { title: 'Kontakt | Lexalis' } },
//   { path: '/services/legal-translations', component: LegalTranslations, meta: { title: 'Prevodi pravnih dokumentov | Lexalis' } },
//   { path: '/services/legal-consulting', component: LegalConsulting, meta: { title: 'Pravno svetovanje | Lexalis' } },
//   { path: '/services/bilingual-contracts', component: BilingualContracts, meta: { title: 'Dvojezične pogodbe in akti | Lexalis' } },
//   { path: '/services/annual-reports', component: AnnualReports, meta: { title: 'Prevodi letnih poročil | Lexalis' } },
//   { path: '/services/proofreading', component: Proofreading, meta: { title: 'Lektoriranje | Lexalis' } },
//   { path: '/services/other', component: Other, meta: { title: 'Druge storitve | Lexalis' } }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// // 🧠 Nastavi <title> ob vsaki menjavi strani
// router.beforeEach((to, from, next) => {
//   const defaultTitle = 'Lexalis | Pravna in jezikovna odličnost'
//   document.title = (to.meta?.title as string) || defaultTitle
//   next()
// })


// export default router

