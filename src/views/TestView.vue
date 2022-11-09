


<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="container-fluid p-0">
      <div class="row m-0 p-0 min-vh-100" style="background: #D6CCC2">
        <div class="col-lg-12 p-5 center-center">
          <h1 class="fw-900" style="font-size: 15vw; letter-spacing: -10px;  -webkit-text-stroke: 1px #000000; color: transparent">mason.</h1>
          <h5 style="margin-top: -40px">designer, developer, writer, musician</h5>
          <router-link to="/about">
            <button class="btn btn-outline-dark">more</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
