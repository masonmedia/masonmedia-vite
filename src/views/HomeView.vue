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
      <div class="row min-vh-100 m-0e">
        <div class="col-lg-8 offset-md-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
            <h5 class="fs-3 text-secondary mb-3">mason</h5>
            <!-- <h5 class="fs-3 text-secondary mb-3">🅼🅰🆂🅾🅽</h5> -->
            <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">Frontend Developer, Visual Designer, Writer, Musician.</h1>
            <p class="fs-4 text-secondary mt-3">Hi, I'm Andrew. I'm a passionate frontend developer & visual designer driven to create beautiful and effective digital experiences.</p>
        </div>
        <!-- <div class="col-lg-12 min-vh-100 m-0 center-center">
            <h1 class="fw-bold lh-1 font-antonio text-uppercase" style="letter-spacing: -5px; font-size: 15vmin; ">🅼🅰🆂🅾🅽</h1>
            <h1 class="fw-bold lh-1 font-antonio text-uppercase" style="letter-spacing: -5px; font-size: 15vmin; ">Hi, I'm Andrew. I'm a passionate frontend developer & visual designer driven to create beautiful and effective digital experiences.</h1>
        </div> -->
      </div>

    <div class="row m-0">
        <div class="col-sm-12 p-0 min-vh-50">
        <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full min-vw-100" src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
        </TransitionGroup>
        </div>
    </div>

      <div class="row p-0 min-vh-100">
        <div class="up col-lg-10 left-center p-5 text-dark min-vh-100">
            <h5 class="fs-3 text-secondary mb-3">Programming + Design</h5>
            <h1 class="display-4 lh-1 fw-bold" style="letter-spacing: -3px;">I combine the art of design with the art of programming, creating websites, CMSs, and user interfaces, with interactive animation, current technologies & modern design trends</h1>
            <router-link to="/about">
                <button class="btn btn-dark mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
      </div>

        <div class="row m-0">
            <div class="col-sm-12 p-0 min-vh-50">
            <TransitionGroup name="fade" mode="out-in">
                <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
                <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full min-vw-100" src="https://images.unsplash.com/photo-1458724029936-2cc6ee38f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JlZW4sbGFuZHNjYXBlfHx8fHx8MTY3NDA1NzE2NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" alt="">
            </TransitionGroup>
            </div>
        </div>

      <!-- dev -->

      <div class="row p-0 min-vh-700">
        <div class="up col-lg-10 left-center p-5">
            <h5 class="fs-3 text-secondary mb-3">Work</h5>
            <h1 class="display-4 lh-1 fw-bold" style="letter-spacing: -3px;">I've worked across a variety of industries from blockchain to education and financial services, building strong partnerships & treading new ground with each project.</h1>
            <router-link to="/work">
                <button class="btn btn-dark mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
      </div>

        <div class="row m-0">
            <div class="col-sm-12 p-0 min-vh-50">
            <TransitionGroup name="fade" mode="out-in">
                <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
                <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full min-vw-100" src="https://images.unsplash.com/photo-1587734361993-0033759da68b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTY3NDA1NzgyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" alt="">
            </TransitionGroup>
            </div>
        </div>

    <!-- work -->

    <div class="row p-0 min-vh-100">
        <div class="up col-lg-10 left-center p-5">
            <h5 class="fs-3 text-secondary mb-3">Blog</h5>
            <h1 class="display-4 lh-1 fw-bold" style="letter-spacing: -3px;">I have an extensive background in copy and content writing which has lead to blogging about my experiences and journey as a frontend developer. I write about coding, design, javascript, and other topics.</h1>
            <router-link to="/blog">
                <button class="btn btn-dark mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
      </div>

        <div class="row m-0">
            <div class="col-sm-12 p-0 min-vh-50">
            <TransitionGroup name="fade" mode="out-in">
                <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
                <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full min-vw-100" src="https://source.unsplash.com/1200x500?abstract,sand" alt="">
            </TransitionGroup>
            </div>
        </div>

    <!-- contact -->
      <div class="row p-0 min-vh-100 position-relative">
        <div class="up col-lg-8 offset-lg-2 center-center p-5">
            <h5 class="fs-3 text-secondary mb-3">Get in touch</h5>
            <h1 class="display-4 lh-1 fw-bold" style="letter-spacing: -3px;">Reach out for more info or to chat about your next project.</h1>

            <!-- <h3 class="up font-antonio text-uppercase fw-light" style="color: #ffffff95">Get in touch</h3>
            <h1 class="up ls-1 lh-1 fw-bold text-uppercase font-antonio" style="letter-spacing: -5px; font-size: 15vmin;">Reach out for more info or to chat about your next project.</h1> -->
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

<style>

</style>
