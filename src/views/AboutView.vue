<script setup>
import { ref, onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'

// image paths
const imgUrl = new URL('@/assets/img/angles.svg', import.meta.url).href

// import animation
const { animate } = useAnimation();

// check img loaded
let isLoaded = ref(false);
function loadImage() {
    isLoaded.value = true
    console.log('image loaded = ' + isLoaded.value)
}

function bigOdds() {
const array = ['green', 'red', 'orange', 'pink', 'black'];
// const oddItems = array.filter((color, index) => index % 2 === 0);

let odds = [];
array.forEach(myFunction)
function myFunction(item, index, arr) {
  if(index % 2 === 0) {
      odds.push(index)
  }
}
console.log(odds); // [0, 2, 4]
}

bigOdds()

onMounted(() => {
    animate();
})
</script>

<template>
  <div>
    <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4">
    <!-- <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4" style="background-size: 100%" :style="{ 'background' : 'url('+ imgUrl +') center repeat'}"> -->
      <div class="row m-0">
        <div class="up col-lg-12 p-5 min-vh-50 m-0 left-center"> 

          <h1 class="fw-bold lh-1 ls-1 text-uppercase font-antonio" style="letter-spacing: -5px; font-size: 15vmin;">About me</h1>
          <!-- <h1 class="up fw-900 lh-1 pb-5 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">About me</h1> -->
          
          <!-- <h2 class="up fw-light text-uppercase position-absolute z-1 top-50 start-50 translate-middle pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">About me</h2> -->
          <!-- <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up fw-light text-uppercase mb-2 mb-lg-4 pb-3 font-antonio" style="color: #DDB892; letter-spacing: -5px; font-size: 15vmin; transform: scale(1.9,2);">About</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">About me</h2>
          </div> -->
        </div>
      </div>

      <TransitionGroup name="fade" mode="out-in">
        <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
        <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in min-vw-100" src="https://source.unsplash.com/1200x500?sand" alt="">
    </TransitionGroup>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 font-antonio fw-900" style="font-size: 55vmin;">01.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase">Intro</h3>
           <h1 class="up lh-1 ls-base text-uppercase font-antonio fw-900 pe-0 pe-lg-3">I'm a frontend developer, designer, writer, & musician. I love animation, typography, layout, and interactivity. I have broad experience working on marketing and development teams at both startups and established firms. I'm a creative lateral thinker, innovator, and am passionate about building digital experiences.</h1>
        </div>
      </div>

      <img class="w-100" height="600" width="1200" style="background: lightgrey" src="https://source.unsplash.com/1200x600?dunes" alt="">
      
      <div class="row m-2 p-0 min-vh-100 position-relative">
        <!-- <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #00000010">02.</h1>
        </div> -->

        <div class="up col-lg-12 left-center p-5">
            <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">02. What I do</h3>
           <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">I specialize in UI and visual design, coding custom interactive websites and web applications, creating blog and CMS solutions, designing API<span class="text-lowercase">s</span> and data structures, and exploring the latest technologies and build tools.</h1>
           <!-- <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">I specialize in building and designing interactive, responsive websites, blogs, landing pages, and ecommerce solutions using a variety of modern technologies.</h1> -->
        </div>
      </div>

      <TransitionGroup name="fade" mode="out-in">
        <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
        <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in min-vw-100" src="https://source.unsplash.com/1200x500?tree" alt="">
    </TransitionGroup>

      <!-- <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">03.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">03. Mission</h3>

           <h1 class="up lh-1 text-uppercase font-antonio fw-900 fs-1">I help companies and individuals create bold, engaging digital products. I'm a lateral thinker who's always innovating, seeking to improve, and learning new technologies to make better things.</h1>
        </div>
      </div> -->

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 font-antonio fw-900" style="font-size: 55vmin;">03.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase">Background</h3>
           <h1 class="up lh-1 ls-1 display-4 text-uppercase font-antonio fw-900">I have a diverse background that contributes to a broad, unique skillset. My experience draws on influences spanning music, art, ecology, writing, parenting, and a belief in ethics and data privacy.</h1>
        </div>
      </div>

      <TransitionGroup name="fade" mode="out-in">
        <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
        <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in min-vw-100" src="https://source.unsplash.com/1200x500?green" alt="">
    </TransitionGroup>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 font-antonio fw-900" style="font-size: 55vmin;">04.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase">Work</h3>
           <h1 class="up lh-1 text-uppercase font-antonio fw-900" style="letter-spacing: -5px; font-size: 10vmin;">Explore some of my work from a variety of spaces using a range of frameworks, build tools, designs, and approches.</h1>
           <router-link to="/work">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <TransitionGroup name="fade" mode="out-in">
        <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
        <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in min-vw-100" src="https://source.unsplash.com/1200x500?minimal,white" alt="">
    </TransitionGroup>

      <!-- contact -->
      <div class="row p-0 min-vh-100 position-relative">
        <div class="up col-lg-8 offset-lg-2 center-center p-5">
            <h3 class="up font-antonio text-uppercase fw-light">05. Get in touch</h3>
            <h1 class="up ls-1 lh-1 fw-bold text-uppercase font-antonio" style="letter-spacing: -5px; font-size: 15vmin;">Reach out for more info or to chat about your next project.</h1>
            <div class="mt-3 d-flex align-items-center">
                <a href="https://medium.com/@andrewmasonmedia" target="_blank">
                    <i class="display-4 bi bi-medium text-secondary me-4"></i>
                </a>
                <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank">
                    <i class="display-4 bi bi-linkedin text-secondary me-4"></i>
                </a>
                <a href="mailto:andrewmasonmedia@gmail.com">
                    <i class="display-4 bi bi-envelope text-secondary"></i>
                </a>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>
