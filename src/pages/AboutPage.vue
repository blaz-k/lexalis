<template>
  <div class="about-page py-5">
    <div class="container">
      <div class="text-center mb-5" data-aos="fade-up">
        <img
          src="../img/Lexalis_logo_black_1.png"
          alt="Lexalis logo"
          class="mb-3"
          style="max-width: 180px"
        />
        <h1 class="fw-bold">O nas</h1>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <p class="fs-5">
            Smo strokovnjaki za prevajanje pravnih besedil, od pogodb in aktov
            do sodnih dokumentov. Naše prevode odlikujejo natančnost, pravna
            skladnost in jezikovna brezhibnost. Ne gre zgolj za prevajanje besed
            – gre za prenos pomena, ki je ključen v pravnem svetu.
          </p>
          <p class="fs-5">
            Na čelu naše ekipe je <strong>Urška Škerbinc</strong>, magistrica
            prava in izkušena prevajalka pravnih besedil, ki ima več kot 8 let
            izkušenj na področju prevajanja najzahtevnejših pravnih dokumentov.
            Njeno strokovno znanje in predanost sta temelj našega dela, ki
            zagotavlja zanesljivost in kakovost v vsakem projektu.
          </p>
        </div>
        <div
          class="col-md-6 text-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="../img/gallery/07.jpg"
            class="img-fluid rounded shadow"
            alt="Urška Škerbinc"
          />
        </div>
      </div>

      <!-- Novi razdelek -->
      <div class="row mt-4" data-aos="fade-up" data-aos-delay="300">
        <!-- <p class="fs-5">
				Smo strokovnjaki za prevajanje pravnih besedil, od pogodb in aktov do sodnih dokumentov.
				Naše prevode odlikujejo natančnost, pravna skladnost in jezikovna brezhibnost. Ne gre zgolj
				za prevajanje besed – gre za prenos pomena, ki je ključen v pravnem svetu.
				</p>
				<p class="fs-5">
				Na čelu naše ekipe je Urška Škerbinc, magistrica prava in izkušena prevajalka pravnih
				besedil, ki ima več kot 8 let izkušenj na področju prevajanja najzahtevnejših pravnih
				dokumentov. Njeno strokovno znanje in predanost sta temelj našega dela, ki zagotavlja
				zanesljivost in kakovost v vsakem projektu.
				</p> -->

        <h3 class="fw-bold mt-5 mb-3">Kaj nas razlikuje?</h3>
        <ul class="fs-5 ps-3">
          <li class="mb-2">
            <strong>Strokovnost in izkušnje:</strong> Naša ekipa tesno sodeluje
            z odvetniškimi pisarnami, pravnimi strokovnjaki in sodnimi tolmači,
            da zagotovi najvišjo raven kakovosti pri vsakem projektu.
          </li>
          <li class="mb-2">
            <strong>Specializacija v pravnih prevodih:</strong> Pravni dokumenti
            so kompleksni in zahtevajo poznavanje pravne terminologije ter
            jezikovnih posebnosti. Naše storitve so prilagojene zahtevam
            pravnega področja, še posebej za prevode iz slovenskega v angleški
            jezik in obratno.
          </li>
          <li class="mb-2">
            <strong>Celovite rešitve:</strong> Ponujamo prevode pogodb, pravnih
            aktov, sodnih dokumentov in uradnih listin ter zagotavljamo njihovo
            pravno skladnost v vseh jezikih.
          </li>
          <li class="mb-2">
            <strong>Zanesljivost in natančnost:</strong> Vsak dokument
            obravnavamo s posebno skrbnostjo, saj vemo, da je vsak detajl
            pomemben.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "O nas | Lexalis",
  meta: [
    {
      name: "description",
      content:
        "Spoznajte strokovno ekipo Lexalis. Več kot 8 let izkušenj v prevajanju pravnih dokumentov in pravnem svetovanju.",
    },
  ],
});
</script>

<style scoped>
.about-page img {
  max-width: 100%;
  height: auto;
}
</style>

<!-- 
<template>
  <div class="about-page py-5">
    <div class="container">
      <div class="text-center mb-5" data-aos="fade-up">
        <img src="../img/Lexalis_logo_black_1.png" alt="Lexalis logo" class="mb-3" style="max-width: 180px;">
        <h1 class="fw-bold">O nas</h1>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <p class="fs-5">
            Smo strokovnjaki za prevajanje pravnih besedil, od pogodb in aktov do sodnih dokumentov.
            Naše prevode odlikujejo natančnost, pravna skladnost in jezikovna brezhibnost.
          </p>
          <p class="fs-5">
            Na čelu ekipe je Urška Škerbinc, magistrica prava in izkušena prevajalka pravnih besedil
            z več kot 8 leti izkušenj na področju prevajanja najzahtevnejših pravnih dokumentov.
          </p>
        </div>
        <div class="col-md-6 text-center" data-aos="fade-left" data-aos-delay="200">
        <img
        src="../img/gallery//07.jpg"
          class="img-fluid rounded shadow"
          alt="Urška Škerbinc"
        />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'O nas | Lexalis',
  meta: [
    {
      name: 'description',
      content: 'Spoznajte strokovno ekipo Lexalis. Več kot 8 let izkušenj v prevajanju pravnih dokumentov in pravnem svetovanju.'
    }
  ]
})
</script>


<style scoped>
.about-page img {
  max-width: 100%;
  height: auto;
}
</style> -->
