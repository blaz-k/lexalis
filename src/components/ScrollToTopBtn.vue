<template>
    <button
      v-show="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Nazaj na vrh"
    >
      ↑
    </button>
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isVisible = ref(false)
  
  function handleScroll() {
    isVisible.value = window.scrollY > 400
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  
.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 22px;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1; /* prepreči vertikalni izriv */
  padding: 0;
}


  /* .scroll-to-top {
    position: fixed;
    bottom: 40px;
    right: 30px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 22px;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: background-color 0.2s ease;
  }
  
  .scroll-to-top:hover {
    background-color: #333;
  }
   */
  </style>  