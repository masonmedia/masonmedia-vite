<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Modal from '@/components/TheModal.vue'
import About from '@/components/Pages/AboutView.vue'
import Aboutpage from '@/components/Pages/About.md'
import Designpage from '@/components/Pages/Design.md'
import Devpage from '@/components/Pages/Development.md'
import Projects from '@/components/Pages/Projects.vue'

// image paths
const imgUrl = new URL('@/assets/img/mm_banner_sand.jpg', import.meta.url).href

// fetch data
const repos = ref([]);
const url = 'https://api.github.com/orgs/masonmedia-projects/repos';
fetch(url)
.then(response => response.json())
.then((data) => {
    repos.value = data
    console.log(data)
})

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
//     gsap.from("h1", {
//     duration: 1.5,
//     x: 100,
//   });
        gsap.utils.toArray(".up").forEach(layer => {
        gsap.from(layer, {
            y: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.inOut",
            scrollTrigger: {
            trigger: layer,
            // scrub: true,
            toggleActions: 'play none none reverse',
            start: "top bottom",
            // start:"top 100%",
            end:"bottom top",
          }
        });
    })
})
</script>

<template>
  <div>
    <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4">
      <div class="row m-3 p-0">
        <div class="up col-lg-12 min-vh-75 rounded-5 p-5 m-0 center-center" style="background-size: cover; background-color: #7F5539;"
        :style="{ 'background' : 'linear-gradient(#00000050, #00000050), url(' + imgUrl + ')' }">
        <!-- <div class="up col-lg-12 min-vh-75 rounded-5 p-5 m-0 center-center" style="background: linear-gradient(#00000050, #00000050), url('https://images.unsplash.com/photo-1570257374937-1d2db29c7f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1554&q=80'); background-size: cover; background-color: #7F5539;"> -->
        <!-- <div class="up col-lg-12 min-vh-75 rounded-5 p-5 m-0 left-center" style="background-color: #EDEDE9; background: url('https://picsum.photos/id/38/1200/600') center; background-size: cover"> -->
          <!-- <h1 class="up fw-bold lh-1 display-1" style="color: #E6CCB2; letter-spacing: -5px">andrew<span style="color: #EDE0D4">mason</span></h1> -->
          <h1 class="up fw-900 lh-1 display-1 mb-0" style="color: #D5BDAF; letter-spacing: -15px; font-size: 25vmin;filter: drop-shadow(2px 2px 5px #000)">mason</h1>
          <!-- <h2 class="h5 fw-900 ">Developer. Designer. Writer.</h2> -->
          <!-- <h1 class="fw-bold lh-1 display-1" style="color: #E6CCB2; letter-spacing: -5px">mason<span style="color: #B08968">media</span></h1> -->
          <!-- <h1 class="fw-900 ls-1 lh-1 display-1" style="-webkit-text-stroke: 1px #E6CCB2; color: transparent">mason.</h1> -->
          <h2 class="up h4 fw-bold text-lowercase" style="color: #EDE0D4; filter: drop-shadow(2px 2px 5px #000); letter-spacing: -1px">Developer. Designer. Writer.</h2>

        </div>
      </div>
      <div class="row m-2 p-0" id="about">
        <div class="col-lg-8 p-0">
            <div class="up left-center p-4 p-lg-5 m-2 min-vh-75 rounded-5" style="background: #D5BDAF; color: grey;">
                <h5 class="up">about</h5>
                <h1 class="up ls-1 lh-1 fw-bold display-3">Hi, I'm Andrew. I'm a passionate frontend developer, designer & musician.</h1>
                <router-link :to="$router.options.routes[1]">
                    <button class="btn ps-0" type="button">
                        <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                    </button>
                </router-link>
                <!-- <button class="btn btn-secondary rounded-5 px-4 mt-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#aboutModal">more</button>
                <Modal modalId="aboutModal" modalDismiss="modal" modalBackground="background: #D6CCC2">
                    <Aboutpage></Aboutpage>
                </Modal> -->
            </div>
        </div>
        <div class="up col-lg-4 p-0">
             <div class="m-2">
                <img src="https://picsum.photos/id/42/1200/600" class="w-100 rounded-5 img-full min-vh-75" alt="">
             </div>
        </div>
      </div>

      <!-- dev -->

      <div class="up row m-3 p-0 rounded-5" style="background: #F5EBE0; color: #B08968;">
        <div class="col-lg-10 min-vh-75 rounded-5 p-4 p-lg-5 m-0 left-center">
            <h5>development</h5>
            <h1 class="ls-1 lh-1 fw-bold display-3">I build websites & web applications from scratch using a variety of modern tools and frameworks.</h1>
            <router-link :to="$router.options.routes[2]">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle" style="color: #B08968"></i>
                </button>
            </router-link>
            <!-- <button class="btn btn-secondary rounded-5 px-4 mt-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#designModal">more</button> -->
                <!-- <Modal modalId="designModal" modalDismiss="modal" modalBackground="background: rgb(245, 235, 224);">
                    <Designpage />
                </Modal> -->
        </div>
      </div>

    <!-- design -->
      <div id="development" class="row m-2 p-0">
        <div class="up col-lg-4 p-0">
             <div class="m-2">
                <img src="https://picsum.photos/id/56/1200/600" class="w-100 rounded-5 img-full min-vh-75" alt="">
             </div>
        </div>
        <div class="up col-lg-8 p-0">
            <div class="left-center p-5 m-2 min-vh-75 rounded-5" style="background: #B08968;">
                <h5 class="up text-dark">design</h5>
                <h1 class="up ls-1 lh-1 fw-bold display-3">I design user interfaces, imagery, and assets for websites, social media, and print.</h1>
                <router-link :to="$router.options.routes[3]">
                    <button class="btn ps-0" type="button">
                        <i class="fs-1 bi bi-plus-circle text-dark"></i>
                    </button>
                </router-link>
                <!-- <button class="btn btn-dark rounded-5 px-4 mt-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#dev">more</button>
                <Modal modalId="dev" modalDismiss="modal" modalBackground="background: rgb(176, 137, 104)" class="text-dark">
                    <Devpage></Devpage>
                </Modal> -->
            </div>
        </div>
      </div>

      <div id="projects" class="up row m-3 p-0 rounded-5" style="background: #E6CCB2; color: #B08968;">
        <div class="up col-lg-10 min-vh-75 rounded-5 p-5 m-0 left-center">
            <h5 class="up">projects</h5>
            <h1 class="up ls-1 lh-1 fw-bold display-3">Explore sample projects from a variety of spaces using a range of build tools, designs, and contexts.</h1>
            <router-link :to="$router.options.routes[4]">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle" style="color: #B08968"></i>
                </button>
            </router-link>
            <!-- <button class="btn btn-secondary rounded-5 px-4 mt-3 fw-bold" style="background: #B08968; border: 1px solid #B08968 !important" type="button" data-bs-toggle="modal" data-bs-target="#projectsModal">more</button> -->
                <!-- <Modal modalId="projectsModal" modalDismiss="modal" modalBackground="background: rgb(245, 235, 224);">
                    <Projects />
                </Modal> -->
        </div>
      </div>

      <div id="contact" class="row m-2 p-0">
        <div class="up col-lg-8 p-0">
            <div class="up left-center p-5 m-2 min-vh-75 rounded-5" style="background: #E3D5CA; color: grey;">
                <h5 class="up">contact</h5>
                <h1 class="up ls-1 lh-1 fw-bold display-3">Reach out for more info or to chat about your next project.</h1>
                <div class="mt-2 d-flex align-items-center">
                    <a href="https://medium.com/@andrewmasonmedia" target="_blank">
                        <i class="fs-1 bi bi-medium text-secondary me-3"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank">
                        <i class="fs-1 bi bi-linkedin text-secondary me-3"></i>
                    </a>
                    <a href="mailto:andrewmasonmedia@gmail.com">
                        <i class="fs-1 bi bi-envelope text-secondary"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 p-0">
             <div class="up m-2">
                <img src="https://picsum.photos/id/76/1200/600" class="w-100 rounded-5 img-full min-vh-75" alt="">
             </div>
        </div>
      </div>
    </div>
  </div>
</template>
