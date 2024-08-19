<script setup>
import { onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'
import useImageLoader from '../stores/useImageLoader'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const { animate } = useAnimation();

// check image loaded
const { isLoaded, loadImage } = useImageLoader();

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

// bigOdds();

const mason = ['m', 'a', 's', 'o', 'n']

onMounted(() => {
    animate();

//     const ml = gsap.timeline(); 
// ml.from(".title", { duration: 1, y: 100 })
//   .from(".title", { duration: 1, backgroundColor: "#f38630" }, "+=0.5") 
//   .from(".title", { duration: 1, x: 0, rotation: -360 }, "+=0.5");

// var yMove = 50;
// gsap.from("h1, h2", {
//   delay: 0.5,
//   color: 'transparent',
//   opacity: 0,
//   duration: 0.7,
//   ease: 'power1.inOut',
//   stagger: 0.2,
//   y: function(i, elem, boxes) {
//     return boxes % 2 === 1 ? -yMove : yMove;
//   },
// });

})
</script>

<template>
  <div>
    <div class="container-fluid px-0 pt-0 pt-lg-5">
      <div class="row px-4 min-vh-100">
        <div class="col-lg-12 d-flex flex-column justify-content-center align-items-start text-start px-4 px-lg-5">
            <h5 class="fs-3 mb-0 ms-1">Andrew Mason</h5>
            <h1 class="fw-900 site-title">Developer.<br>Designer.<br>Writer.<br>Musician.</h1>
            <!-- <p class="col-md-9 fs-4 mt-3 mb-0">I'm a passionate frontend developer & visual designer driven to create beautiful and effective digital experiences.</p> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
      </div>

      <!-- about -->

      <div class="row p-0 min-vh-100 m-3 bg-warning rounded-5 shadow">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 px-5 pt-3 pb-5 left-center order-2 order-lg-1">
            <h5 class="mb-3">About me</h5>
            <h1 class="display-1 lh-1 ls-1 fw-900">Design + Development</h1>
            <p class="fs-5 my-3 col-md-11">I combine the art of design with the art of programming, creating websites, CMSs, and user interfaces, with interactive animation, current technologies & modern design trends.</p>
            <router-link to="/about">
                <button class="btn btn-dark rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1" @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg rounded-5 col-12 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.unsplash.com/photo-1505484128222-46ced733ba01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- projects -->

      <div class="row p-0 min-vh-100 m-3 rounded-5 shadow" style="background-color: darkturquoise;">
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.unsplash.com/photo-1625834384234-fd4eb7fe121f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
        </TransitionGroup>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 px-5 pt-3 pb-5 left-center">
            <h5 class="mb-3">What I do</h5>
            <h1 class="display-1 lh-1 ls-1 fw-900">Projects</h1>
            <p class="fs-5 my-3 col-md-11">I've worked in a variety of spaces building projects using a range of technologies. I've worked in startups and established firms from blockchain to education, healthcare, and financial services. My current stack of choice is Vue 3, Bootstrap 5, GSAP animation, and Netlify cloud deployment.</p>
            <router-link to="/work">
                <button class="btn btn-dark rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
      </div>

    <!-- blog -->

    <div class="row p-0 min-vh-100 m-3 rounded-5 shadow" style="background-color: hotpink;">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 px-5 pt-3 pb-5 left-center order-2 order-lg-1">
            <h5 class="mb-3">Blog</h5>
            <h1 class="display-1 lh-1 fw-900" style="letter-spacing: -3px;">Tech writing</h1>
            <p class="fs-5 my-3 col-md-11">I have an extensive background in copy and content writing which has lead to blogging about my experience as a frontend developer. I write about coding, design, javascript, and other topics.</p>
            <router-link to="/blog">
                <button class="btn btn-dark rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.unsplash.com/photo-1540760938999-077b8231d890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- contact -->

      <div class="row p-0 min-vh-100 bg-primary text-light m-3 rounded-5 shadow" style="">
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.unsplash.com/photo-1656932850123-dbd64a854816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1603&q=80" alt="">
        </TransitionGroup>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 px-5 pt-3 pb-5 left-center">
            <h5 class="mb-3">More</h5>
            <h1 class="display-1 lh-1 fw-900" style="letter-spacing: -3px;">Links + Resources</h1>
            <p class="fs-5 my-3 col-md-11">Check out my <a href="https://github.com/masonmedia-projects/" target="_blank">Github</a>, <a href="https://www.behance.net/andrewmasonmedia" target="_blank">Behance</a>, and <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank">Linkedin</a> profiles for more info and samples of code, design, and work. Reach out for more info, to say Hi, or discuss your next project.</p>
            <a href="mailto:bassfx@duck.com">
                <button class="btn btn-light mt-3 px-4 rounded-5 fw-bold">Get in touch</button>
            </a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
a {
    color: goldenrod;
}
</style>
