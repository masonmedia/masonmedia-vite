<script setup>
import { ref, computed, onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'
import useImageLoader from '../stores/useImageLoader'
// import Layout from '../components/Layout.vue'

// image paths
function getImageUrl(name, ext) {
  return new URL(`../assets/img/${name}.${ext}`, import.meta.url).href
}

// import animation
const { animate } = useAnimation();
const { isLoaded, loadImage } = useImageLoader();

// const photos = ref([]);
// function images() {
//   fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//   .then(response => response.json())
//   .then((data) => {
//     photos.value = data;
//     console.log(data)
//   })
// }
// images();

// choose random color for backgrounds i.e. :style="{'background' : getRandomColor() }"
// const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#FF4D4D", "#99E6E6", "#6666FF"];

// function getRandomColor() {
//   const randomIndex = Math.floor(Math.random() * colorArray.length);
//   return colorArray[randomIndex];
// }

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
      <div class="row row min-vh-100 m-3 bg-warning rounded-5 shadow">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
            <h5 class="fs-3 mb-3">About me</h5>
            <h1 class="display-4 lh-1 fw-bold" style="letter-spacing: -3px;">Hi, I' m Andrew. I'm a passionate frontend developer & visual designer driven to create beautiful, modern, and effective digital experiences.</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
      </div>

      <div class="row p-0 min-vh-100 m-3 bg-warning rounded-5 shadow">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 p-5 left-center order-2 order-lg-1">
            <h5 class="mb-3">01</h5>
            <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">Intro</h1>
            <p class="fs-5 mt-3 mb-0 col-md-11">I'm a frontend developer, designer, writer, & musician. I love animation, typography, layout, and interactivity. I have broad experience working on marketing and development teams at both startups and established firms. I'm a creative lateral thinker and am passionate about building digital experiences.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
              <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 img-full"></div>
              <img :key="2" class="w-100 rounded-5" @load="loadImage" v-show="isLoaded" :src="getImageUrl('horizon','svg')" alt="">
        </TransitionGroup>
        </div>
      </div>
      
      <div class="row p-0 min-vh-100 m-3 bg-warning rounded-5 shadow">
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
              <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 img-full"></div>
              <img :key="2" class="w-100 rounded-5" :src="getImageUrl('circles','svg')" alt="">
        </TransitionGroup>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 p-5 left-center">
            <h5 class="mb-3">02</h5>
            <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">What I do</h1>
            <p class="fs-5 mt-3 mb-0 col-md-11">I specialize in UI and visual design, coding custom interactive websites and web applications, creating blog and CMS solutions, designing APIs and data structures, and exploring the latest technologies and build tools.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
      </div>

      <div class="row p-0 min-vh-100 m-3 bg-warning rounded-5 shadow">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 p-5 left-center order-2 order-lg-1">
            <h5 class="mb-3">03</h5>
            <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">Background</h1>
            <p class="fs-5 mt-3 mb-0 col-md-11">I have a diverse background that contributes to a broad, unique skillset. My experience draws on influences spanning music, art, ecology, writing, parenting, and a belief in ethics and data privacy.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="w-100 rounded-5" :src="getImageUrl('square','svg')" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- work -->
      <div class="row p-0 min-vh-100 m-3 bg-warning rounded-5 shadow">
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="w-100 rounded-5" :src="getImageUrl('circle','svg')" alt="">
        </TransitionGroup>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 p-5 left-center">
            <h5 class="mb-3">04</h5>
            <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">Projects</h1>
            <p class="fs-5 my-3 mb-0 col-md-11">Explore some of my work from a variety of spaces using a range of frameworks, build tools, designs, and approches.</p>
            <router-link to="/work">
                <button class="btn btn-dark px-4 mt-4 rounded-5 fw-bold" type="button">More
                </button>
            </router-link>
        </div>
      </div>

    </div>
  </div>
</template>
