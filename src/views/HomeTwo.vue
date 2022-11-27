<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import useAnimation from '../stores/useAnimation'
const { animate } = useAnimation();

// image paths
const imgUrl = new URL('@/assets/img/mm_banner_sand.jpg', import.meta.url).href

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
    gsap.from("body", {
        duration: 1,
        opacity: 0,
    });
})
</script>

<template>
  <div>
    <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4 bg-dark text-light">
      <div class="row m-0">
        <div class="up col-lg-12 min-vh-100 pb-5 m-0 center-center">
          <h1 class="up fw-900 lh-1 pb-5 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">Mason</h1>
          
          <!-- <h2 class="up fw-light text-uppercase position-absolute z-1 top-50 start-50 translate-middle pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">Developer. Designer. Writer.</h2> -->

          <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up fw-light text-uppercase mb-4 pb-3 font-antonio" style="color: #DDB892; letter-spacing: -5px; font-size: 15vmin; transform: scale(1.9,2); ">Mason</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">Developer. Designer. Writer.</h2>
          </div>

        </div>
      </div>

      <hr class="text-secondary w-75 mx-auto">

      <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">about</h1>
        </div>

        <div class="up col-lg-8 offset-lg-2 center-center p-5">
            <h3 class="up text-uppercase fw-light font-antonio" style="color: #ffffff95">about me</h3>
            <h1 class="up ls-1 lh-1 text-uppercase display-2 font-antonio">Hi, I'm Andrew. I'm a passionate frontend developer, visual designer & musician.</h1>
            <router-link to="/about">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <!-- dev -->

      <hr class="text-secondary w-75 mx-auto">

      <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">coding</h1>
        </div>

        <div class="up col-lg-8 left-center p-5">
            <h3 class="up text-uppercase fw-light font-antonio" style="color: #ffffff95">coding & development</h3>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-2">I build websites & web applications from scratch using a variety of modern tools and frameworks.</h1>
            <router-link to="/development">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <hr class="text-secondary w-75 mx-auto">

    <!-- design -->
    <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="up position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">design</h1>
        </div>

        <div class="up col-lg-8 offset-lg-4 d-flex flex-column justify-content-center align-items-end text-end p-5">
            <h3 class="up font-antonio text-uppercase fw-light" style="color: #ffffff95">visual design</h3>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-2">I design user interfaces, imagery, and assets for websites, social media, and print.</h1>
            <router-link to="/design">
            <!-- <router-link :to="$router.options.routes[1]"> -->
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <hr class="text-secondary w-75 mx-auto">

    <!-- design -->
    <!-- <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="up position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">copy</h1>
        </div>

        <div class="up col-lg-8 offset-lg-2 center-center p-5">
            <h5 class="up font-antonio">copy writing & editing</h5>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-3">I write and edit copy for a wide variety of contexts from website content to blog posts & social media, all with a focus on SEO and UX.</h1>
            <router-link :to="$router.options.routes[1]">
                <button class="btn stretched-link ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div> -->

      <!-- <hr class="text-secondary w-75 mx-auto"> -->

    <!-- work -->
    <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="up position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">Work</h1>
        </div>

        <div class="up col-lg-12  left-center p-5">
            <h3 class="up font-antonio text-uppercase fw-light" style="color: #ffffff95">Work</h3>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-2">Explore some of my work from a variety of spaces using a range of frameworks, build tools, designs, and approches.</h1>
            <router-link to="/work">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

      <hr class="text-secondary w-75 mx-auto">

    <!-- contact -->
      <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">Contact</h1>
        </div>

        <div class="up col-lg-8 offset-lg-2 center-center p-5">
            <h3 class="up font-antonio text-uppercase fw-light" style="color: #ffffff95">Get in touch</h3>
            <h1 class="up ls-1 lh-1 text-uppercase display-2 font-antonio">Reach out for more info or to chat about your next project.</h1>
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
.font-antonio {
    font-family: 'Antonio', Arial, Helvetica, sans-serif
}
</style>
