<template>
	<div id="app">
		<AppHeader />
		
		<main>
			<transition name="fade" mode="out-in">
				<RouterView />
			</transition>
		</main>

		<ScrollToTopBtn />

		<AppFooter />
	</div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollToTopBtn from './components/ScrollToTopBtn.vue'
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem 1rem;
}

/* Fade animation for route transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

html {
  scroll-behavior: smooth;
}
</style>