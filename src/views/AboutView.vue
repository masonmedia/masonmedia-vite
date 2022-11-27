<script setup>
import { onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'

// image paths
const imgUrl = new URL('@/assets/img/angles.svg', import.meta.url).href

// import animation
const { animate } = useAnimation();

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
    <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4 bg-dark text-secondary" style="background-size: 100%" :style="{ 'background' : 'url('+ imgUrl +') center repeat'}">
      <div class="row m-0">
        <div class="up col-lg-12 min-vh-100 pb-5 m-0 center-center">
          <h1 class="up fw-900 lh-1 pb-5 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">About</h1>
          
          <!-- <h2 class="up fw-light text-uppercase position-absolute z-1 top-50 start-50 translate-middle pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">About me</h2> -->
          <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up fw-light text-uppercase mb-2 mb-lg-4 pb-3 font-antonio" style="color: #DDB892; letter-spacing: -5px; font-size: 15vmin; transform: scale(1.9,2);">About</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">About me</h2>
          </div>
        </div>
      </div>

      <!-- <hr class="text-secondary w-75 mx-auto"> -->

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">01.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">01. Intro</h3>
           <h1 class="up lh-1 text-uppercase font-antonio fw-900">I'm a frontend developer and visual/UI designer. I love animation, color, typography, layout, and interactivity. I'm self-taught and have broad experience working on marketing and development teams at both startups and established firms. I make digital products, improve processes, and am passionate about all things design.</h1>
        </div>
      </div>
      
      <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">02.</h1>
        </div>

        <div class="up col-lg-12 left-center p-5">
            <h3 class="up font-antonio fw-light text-uppercase border-top border-secondary w-100 pt-3">02. What I do</h3>
           <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">I specialize in building and designing interactive, responsive websites and web applications. I use a variety of technologies to craft overall digital experiences - from layout and animation to branding, messaging and copy editing.</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">03.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">03. Mission</h3>

           <h1 class="up lh-1 text-uppercase font-antonio fw-900 fs-1">I help companies and individuals create bold, engaging digital products. I'm a lateral thinker who's always innovating, seeking to improve, and learning new technologies to make better things.</h1>
        </div>
      </div>

    <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="up col-lg-12 d-flex flex-column justify-content-center align-items-end text-end p-5">
          <h3 class="up font-antonio fw-light text-uppercase border-top border-secondary w-100 pt-3">04. Background</h3>
          <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">I have a diverse, multi-disciplinary background that draws on experience in music, art, ecology, parenting, writing, and a belief in ethics and data privacy.</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">05.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">05. Work</h3>
           <h1 class="up lh-1 text-uppercase font-antonio fw-900 fs-1">Explore some of my work from a variety of spaces using a range of frameworks, build tools, designs, and approches.</h1>
           <router-link to="/work">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

    
    </div>
  </div>
</template>
