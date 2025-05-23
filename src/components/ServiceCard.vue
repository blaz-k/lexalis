<template>
  <div class="service-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <router-link :to="link" class="btn">Več o storitvi</router-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.service-card p {
  color: #666;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background: #2c3e50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #1a252f;
}
</style>