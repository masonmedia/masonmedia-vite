
<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  window.scrollTo(0, 0);
  console.log('design mounted')
})
</script>
<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row m-0 p-0 min-vh-50 left-center bg-light" style="background: royalblue">
        <div class="col-lg-12 p-5">
          <h1 class="fw-900" style="font-size: 65vw; line-height: 0.6 !important; letter-spacing: -10px; word-wrap: break-word;">design</h1>
        </div>
      </div>
      <div class="py-5 my-5"></div>
      <div class="row m-0 p-0 min-vh-100 left-center bg-light" style="background: royalblue">
        <div class="col-lg-12 p-5">
          <h1 class="fw-900 lh-1 ls-1 display-1">I design imagery, layouts, user interfaces, and assets for websites, social media, and print using Photoshop, Canva, Crello, Lunapic and other tools.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
