<script setup>
import { RouterLink, RouterView } from 'vue-router'
import gsap from 'gsap'
import Nav from './components/TheNav.vue'
import Footer from './components/TheFooter.vue'

const beforeEnter = (el) => {
      // gsap.set(".wipe", { height: '10000px', opacity: 0 });
      gsap.set("nav", { y: -100, opacity: 0 });
      gsap.set("footer", { y: 100, opacity: 0 });
      gsap.set(el, {
        opacity: 0,
        y: -50
      });
}

const enter = (el, done) => {
      // gsap.to(".wipe", { height: '0', opacity: 1 });
      gsap.to("nav", { y: 0, opacity: 1 });
      gsap.to("footer", { y: 0, opacity: 1 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power4.inOut',
        onComplete: done
      })
}

const leave = (el, done) => {
      // gsap.to(".wipe", { height: '100vh', opacity: 1 });
      gsap.to("nav", { y: -100, opacity: 0 });
      gsap.to("footer", { y: 100, opacity: 0 });
      gsap.to(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.inOut',
        onComplete: done
      })
    }
    
</script>

<template>
<div class="overflow-hidden position-relative">
  <!-- <div class="wipe position-absolute w-100 bg-warning z-1"></div> -->
  <header>
    <Nav></Nav>
  </header>

  <router-view v-slot="{ Component }">
    <!-- <transition 
    name="slide-fade"
    mode="out-in"> -->
    <transition 
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
      <component :is="Component" />
    </transition>
  </router-view>
<Footer />
  <!-- <RouterView /> -->
</div>
</template>

<style scoped>

/* nav a.router-link-exact-active {
  color: grey;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

</style>
