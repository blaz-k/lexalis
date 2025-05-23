// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import { createHead } from '@vueuse/head'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/styles.css'; 
import './styles/flexslider.css'; 
import './styles/bootstrap.min.css'; 
import './styles/bootstrap-responsive.min.css'; 
import './styles/bootstrap-override.css';
import './styles/font-awesome/font-awesome.css'; 
import './styles/font-awesome/font-awesome-ie7.min.css'; 
import './styles/navbar-dropdown-fix.css'
import 'aos/dist/aos.css'

const head = createHead()
const app = createApp(App)
app.use(router)
app.use(head)
app.mount('#app')
AOS.init()
