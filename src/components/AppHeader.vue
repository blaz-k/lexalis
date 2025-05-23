<!-- <template>
	<header class="app-header">
		<nav>
			<ul>
				<router-link to="/" class="d-flex align-items-center me-3 text-decoration-none">
					<img src="../img/Lexalis_fav_icon.png" alt="Lexalis logo" style="height: 24px; margin-right: 8px;" />
					<span class="nav-link"></span>
					</router-link>

				<li><RouterLink to="/">Domov</RouterLink></li>
				<li><RouterLink to="/about">O nas</RouterLink></li>
				<li class="dropdown">
					<span><RouterLink Routerlink to="/services" >Storitve</RouterLink></span>
					<ul class="dropdown-menu">
						<li><RouterLink to="/services/legal-translations">Prevodi pravnih dokumentov</RouterLink></li>
						<li><RouterLink to="/services/legal-consulting">Pravno svetovanje</RouterLink></li>
						<li><RouterLink to="/services/bilingual-contracts">Dvojezične pogodbe</RouterLink></li>
						<li><RouterLink to="/services/annual-reports">Prevodi letnih poročil</RouterLink></li>
						<li><RouterLink to="/services/proofreading">Lektoriranje</RouterLink></li>
						<li><RouterLink to="/services/other">Drugo</RouterLink></li>
					</ul>
				</li>
				<li><RouterLink to="/contact">Kontakt</RouterLink></li>
			</ul>
		</nav>
	</header>
</template> -->

<template>
	<header class="app-header">
		<nav>
		<ul>
			<li>
			<router-link to="/" class="d-flex align-items-center nav-link">
				<img src="../img/Lexalis_fav_icon.png" alt="Lexalis logo" style="height: 24px; margin-right: 8px;" />
				
			</router-link>
			</li>
			<li><RouterLink to="/" class="nav-link">Domov</RouterLink></li>
			<li><RouterLink to="/about" class="nav-link">O nas</RouterLink></li>
			<li class="dropdown">
				<RouterLink to="/services" class="nav-link">Storitve</RouterLink>
				<ul class="dropdown-menu">
					<li><RouterLink to="/services/legal-translations" class="nav-link">Prevodi pravnih dokumentov</RouterLink></li>
					<li><RouterLink to="/services/legal-consulting" class="nav-link">Pravno svetovanje</RouterLink></li>
					<li><RouterLink to="/services/bilingual-contracts" class="nav-link">Dvojezične pogodbe</RouterLink></li>
					<li><RouterLink to="/services/annual-reports" class="nav-link">Prevodi letnih poročil</RouterLink></li>
					<li><RouterLink to="/services/proofreading" class="nav-link">Lektoriranje</RouterLink></li>
					<li><RouterLink to="/services/other" class="nav-link">Drugo</RouterLink></li>
				</ul>
				</li>

			<li><RouterLink to="/contact" class="nav-link">Kontakt</RouterLink></li>
		</ul>
		</nav>
	</header>
</template>

<script setup lang="ts">
</script>

<style scoped>

.app-header {
  background-color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

nav ul li {
  position: relative;
}

.nav-link {
  color: #000 !important;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  font-weight: 500;
}

.nav-link:hover {
  color: #333 !important;
  background-color: #f1f1f1;
  border-radius: 6px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  display: none;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  z-index: 100;
  min-width: 220px;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #222 !important;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background-color: #f8f9fa;
  border-radius: 4px;
  color: #000 !important;
}

</style>