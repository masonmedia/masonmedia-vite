
<script setup>
import { onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'
const { animate } = useAnimation();

// image paths
const imgUrl = new URL('@/assets/img/angles.svg', import.meta.url).href

onMounted(() => {
  animate();
})
</script>

<template>
  <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4 bg-dark text-secondary" style="background-size: 100%" :style="{ 'background' : 'url('+ imgUrl +') center repeat'}">
      <div class="row m-0">
        <div class="up col-lg-12 min-vh-100 pb-5 m-0 center-center">
          <h1 class="up fw-900 lh-1 pb-5 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">Design</h1>
          
          <!-- <h2 class="up fw-900 text-uppercase position-absolute z-1 top-50 start-50 translate-middle font-antonio pb-5" style="color: #DDB892; letter-spacing: -1px;">Design</h2> -->
          <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up fw-light text-uppercase mb-2 mb-lg-4 pb-3 font-antonio" style="color: #DDB892; letter-spacing: -5px; font-size: 15vmin; transform: scale(1.9,2); ">Design</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">UI. UX. Graphic.</h2>
          </div>
        </div>
      </div>

      <!-- <hr class="text-secondary w-75 mx-auto"> -->

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">01.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">01. UI design</h3>
          <h1 class="up lh-1 text-uppercase font-antonio fw-900 display-3">I design and build user interfaces, websites, CMS<span class="text-lowercase">s</span>/blogs, and mobile applications.</h1>
        </div>
      </div>
      
      <div class="row m-2 p-0 min-vh-100 position-relative">
        <!-- <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">Ux</h1>
        </div> -->

        <div class="up col-lg-12 left-center p-5">
            <h3 class="up font-antonio fw-light text-uppercase border-top border-secondary w-100 pt-3">02. UX design</h3>
           <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">Years of design and development have given me a practical & functional understanding of user experience. I merge user input, stakeholder requirements, and information architecture into working prototypes for live applications.</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">03.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio text-uppercase fw-light w-100 pt-3">03. Graphic design</h3>
           <h1 class="up lh-1 text-uppercase font-antonio fw-900 display-3">I create custom images, graphics, backgrounds, logos, and use a variety of libraries to source project specific icons.</h1>
        </div>
      </div>

    <div class="row m-2 p-0 min-vh-100 position-relative">

        <div class="up col-lg-12 d-flex flex-column justify-content-center align-items-end text-end p-5">
            <h3 class="up font-antonio fw-light text-uppercase border-top border-secondary w-100 pt-3">04. Image sourcing</h3>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">I also source and select imagery that is ideally suited to a specific brand, color palette, and theme.</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">05.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100">05. Work</h3>
          <h1 class="up lh-1 text-uppercase font-antonio fw-900 display-3">Explore further design samples on the <router-link style="color: #7F5539" to="/work">work</router-link> page and on my <a href="https://www.behance.net/andrewmasonmedia" target="_blank" style="color: #7F5539">Bēhance</a> profile.</h1>
        </div>
      </div>

    
    </div>
  <!-- <div class="pt-3 pt-lg-5 mt-3 mt-lg-5">
    <DesignPage />
  </div> -->
</template>

<style>
</style>
