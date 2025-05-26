# Lexalis – Pravno-jezikovna spletna stran

Lexalis je profesionalna predstavitvena spletna stran podjetja, specializiranega za pravne prevode, lektoriranje in pravno svetovanje. Stran je zgrajena z uporabo **Vue 3**, **Vite**, **Vue Router** in **Bootstrap**, z dodatno podporo za **SEO**, **AOS animacije** in **responsivnost**.

## 🔧 Tehnologije

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)
- [@vueuse/head](https://vueuse.org/core/useHead/) za SEO meta oznake

## 📁 Struktura projekta

src/
├── assets/
├── components/ # AppHeader, AppFooter, ScrollToTopBtn
├── pages/ # HomePage, AboutPage, ContactPage, ServicesPage
│ └── services/ # LegalTranslations.vue, Proofreading.vue, itd.
├── router/ # index.ts z definiranimi potmi
├── styles/ # Vsi CSS fajli (bootstrap override, globalni stil, itd.)
└── App.vue # Glavna aplikacijska komponenta


🔍 SEO in hitrost
Dodane title in meta description za vsako stran (prek useHead)

Pripravljeno za Google Search Console

robots.txt in sitemap.xml vključena

Pagespeed Insights ocena:
✅ Desktop: 100/100
✅ Mobile: 98–100/100

📱 Responsivnost
Stran je popolnoma prilagojena za mobilne naprave:

Dropdown meni deluje tudi na dotik

Scroll-to-top gumb, vidno samo na manjših zaslonih

Pravilno razmerje slik in postavitve tudi na manjših resolucijah

ℹ️ Ostalo
Animacije na scroll (fade-in, delay, itd.)

Vključena favicon in logotipi podjetja

Optimizirane slike (lazy loading)

Pripravljeno za nadaljnje SEO nadgradnje (json-ld, structured data)

👩‍⚖️ Projekt je razvit za podjetje Lexalis – pravno-jezikovne storitve.
Za tehnično pomoč, kontaktirajte razvijalca ali uredite kodo lokalno z uporabo navodil zgoraj.







