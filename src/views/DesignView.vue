
<script setup>
import { onMounted } from 'vue';
import posts from '../data/dummy.json';
// import useAnimation from '../stores/useAnimation';
// const { animate } = useAnimation();

// image paths
function getImageUrl(name, ext) {
  return new URL(`../assets/img/${name}.${ext}`, import.meta.url).href
}
onMounted(() => {
  // animate();
})
</script>

<template>
  <!-- style="background-size: 100%" :style="{ 'background' : 'url('+ imgUrl +') center repeat'}" -->
  <div class="container-fluid">
      <!-- <div class="row m-0">
        <div class="col-lg-8 min-vh-100 m-0 center-center">
          
          <h1 class="up fw-900 lh-1 pb-5 text-uppercase" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">Design</h1>
          
          <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up text-uppercase mb-2 mb-lg-4 pb-3" style="color: #DDB892; letter-spacing: -5px; font-weight: 900; font-size: 15vmin; transform: scale(1.9,2); ">Design</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">UI. UX. Graphic.</h2>
          </div>

          <h1 class="display-1 lh-1 text-danger" style="color: #DDB892; letter-spacing: -5px; font-weight: 900; font-size: 25vmin;">Return of the Living Dad</h1>
          

        </div>
      </div> -->

      <div class="row min-vh-100 mt-5" :style="{'background' : 'url('+ getImageUrl('splatter', 'png') +') center right no-repeat', 'background-size' : '100%'}">
        <div class="col-lg-8 offset-lg-2 center-center">
          <!-- <h1 class="text-uppercase " style="filter: drop-shadow(5px 5px 10px #000); line-height: 0.8; letter-spacing: -5px; font-weight: 900; font-size: 30vmin;">KIDS F*#$!</h1> -->
          <h1 class="text-uppercase font-antonio" style="filter: drop-shadow(20px 20px 10px darkred); line-height: 0.8; letter-spacing: -5px; font-weight: 900; font-size: 20vmin;">Return of the living Dad</h1>
          <p class="h4 mt-3 text-light">I'm a Dad. Yes, it is like a Zombie movie. <br>These are my stories.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4" v-for="(post, index) in posts" :key="index">
          <div class="p-3 m-3 rounded-4">
            <h5 v-html="post.date"></h5>
            <h2 class="fw-900 text-uppercase" v-html="post.title"></h2>
            <!-- <p v-html="post.body.slice(0,200)"></p> -->
            <router-link :to="'/design/' + post.id">
              <button class="btn btn-outline-dark">Read more</button>
            </router-link>

            <!-- <router-link :to="{name: 'Detail', params: { id: post.id }}"> Read More </router-link> -->


          </div>
        </div>
      </div>

    
    </div>
</template>

<style>
</style>
