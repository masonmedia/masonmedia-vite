<script setup>
import { ref, onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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

const mason = ['m', 'a', 's', 'o', 'n']

onMounted(() => {
    animate();
    gsap.from("body", {
        duration: 1,
        opacity: 0,
    });

//     const ml = gsap.timeline(); 
// ml.from(".title", { duration: 1, y: 100 })
//   .from(".title", { duration: 1, backgroundColor: "#f38630" }, "+=0.5") 
//   .from(".title", { duration: 1, x: 0, rotation: -360 }, "+=0.5");

var yMove = 50;
gsap.from("h1, h2", {
  delay: 0.5,
  color: 'transparent',
  opacity: 0,
  duration: 0.7,
  ease: 'power1.inOut',
  stagger: 0.2,
  y: function(i, elem, boxes) {
    return boxes % 2 === 1 ? -yMove : yMove;
  },
});

})
</script>

<template>
  <div>
    <div class="container-fluid px-0 pt-0 pt-lg-5">
      <div class="row m-0 position-relative">
        <div class="col-lg-12 min-vh-100 p-5 m-0 left-center">
            <!-- <h1 class="fw-bold lh-1 font-antonio text-uppercase" style="letter-spacing: -5px; font-size: 15vmin; ">Hi. I'm Andrew. I help create awesome brands and modern websites.</h1> -->
            <h1 class="fw-bold lh-1 font-antonio text-uppercase" style="letter-spacing: -5px; font-size: 15vmin; ">Hi, I'm Andrew. I'm a passionate frontend developer & visual designer driven to create beautiful and effective digital experiences.</h1>
        </div>
      </div>

      <!-- <img class="w-100" src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE2NzQwNTQyNTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" alt=""> -->
      <!-- <img class="w-100 up" height="600" width="1200" style="background: lightgrey" src="https://source.unsplash.com/1200x600?wallpaper,landscape" alt=""> -->

      <TransitionGroup name="fade" mode="out-in">
        <div :key="1"  @load="loadImage" v-show="!isLoaded" class="w-100 min-vh-50 bg-secondary"></div>
        <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in w-100" src="https://source.unsplash.com/1200x500?clouds" alt="">
    </TransitionGroup>

      <div class="row p-0 min-vh-100">

        <div class="up col-lg-12 left-center p-5 text-dark min-vh-100">
            <h1 class="fw-bold lh-1 font-antonio text-uppercase" style="letter-spacing: -5px; font-size: 15vmin;">I create websites, CMS<span class="text-lowercase">s</span>, user interfaces, and ecommerce solutions with interactive animation, current technologies, and modern design trends.</h1>
            <router-link to="/about">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <img class="w-100" src="https://images.unsplash.com/photo-1458724029936-2cc6ee38f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JlZW4sbGFuZHNjYXBlfHx8fHx8MTY3NDA1NzE2NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" alt="">

      <!-- dev -->

      <div class="row p-0 min-vh-700">
        <div class="up col-lg-12 left-center p-5">
            <h1 class="up ls-1 lh-1 fw-bold text-uppercase font-antonio" style="letter-spacing: -5px; font-size: 15vmin;">I've worked across a variety of industries from blockchain to education and financial services, building strong partnerships & treading new ground with each project.</h1>
        </div>
      </div>

      <img class="w-100" src="https://images.unsplash.com/photo-1587734361993-0033759da68b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTY3NDA1NzgyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" alt="">

    <!-- work -->
    <div class="row p-0 min-vh-100">
        <div class="up col-lg-10 left-center p-5">
            <h1 class="up ls-1 lh-1 fw-bold text-uppercase font-antonio" style="letter-spacing: -5px; font-size: 15vmin;">Explore some of my work from a variety of spaces using a range of technologies, build tools, designs, and approches.</h1>
            <router-link to="/work">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <img class="w-100" src="https://source.unsplash.com/1200x600?sand" alt="">

    <!-- contact -->
      <div class="row p-0 min-vh-100 position-relative">
        <div class="up col-lg-8 offset-lg-2 center-center p-5">
            <h3 class="up font-antonio text-uppercase fw-light" style="color: #ffffff95">Get in touch</h3>
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

<style>

</style>
