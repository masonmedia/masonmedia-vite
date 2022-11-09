<script setup>
import { ref, onMounted } from 'vue'
import Modal from '@/components/TheModal.vue'
import About from '@/components/Pages/AboutView.vue'
import Aboutpage from '@/components/Pages/About.md'
import Designpage from '@/components/Pages/Design.md'
import Devpage from '@/components/Pages/Development.md'
import Projects from '@/components/Pages/Projects.vue'
import Design from '@/components/Pages/DesignView.vue'

const repos = ref([]);
const url = 'https://api.github.com/orgs/masonmedia-projects/repos';
fetch(url)
.then(response => response.json())
.then((data) => {
    repos.value = data
    console.log(data)
})
</script>

<template>
  <div class="fade-up">
    <div class="container-fluid px-0 pt-5 mt-4">
      <div class="row m-3 p-0">
        <div class="col-lg-12 min-vh-75 rounded-5 p-5 m-0 center-center" style="background-color: #EDEDE9; background: url('https://picsum.photos/id/38/1200/600') center; background-size: cover">
          <h1 class="fw-bold lh-1 display-1" style="color: #E6CCB2; letter-spacing: -5px">mason<span style="color: #EDE0D4">media</span></h1>
          <!-- <h1 class="fw-bold lh-1 display-1" style="color: #E6CCB2; letter-spacing: -5px">mason<span style="color: #B08968">media</span></h1> -->
          <!-- <h1 class="fw-900 ls-1 lh-1 display-1" style="-webkit-text-stroke: 1px #000000; color: transparent">mason.</h1> -->
        </div>
      </div>
      <div class="row m-2 p-0" id="about">
        <div class="col-lg-8 p-0">
            <div class="left-center p-5 m-2 min-vh-75 rounded-5" style="background: #D6CCC2">
                <h5 class="text-dark">about</h5>
                <h1 class="ls-1 lh-1 fw-bold display-3" style="color: grey;">Hi, I'm Andrew. I'm a passionate frontend developer, designer & musician.</h1>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#aboutModal">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
                <!-- <button class="btn btn-secondary rounded-5 px-4 mt-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#aboutModal">more</button> -->
                <Modal modalId="aboutModal" modalDismiss="modal" modalBackground="background: #D6CCC2">
                    <Aboutpage></Aboutpage>
                    <!-- <About></About> -->
                </Modal>
            </div>
        </div>
        <div class="col-lg-4 p-0">
             <div class="m-2">
                <img src="https://picsum.photos/id/42/1200/600" class="w-100 rounded-5 img-full min-vh-75" alt="">
             </div>
        </div>
      </div>

      <!-- design -->

      <div id="design" class="row m-3 p-0 rounded-5" style="background: #F5EBE0">
        <div class="col-lg-10 min-vh-75 rounded-5 p-5 m-0 left-center">
            <h5 class="text-dark">design</h5>
            <h1 class="ls-1 lh-1 fw-bold display-3" style="color: grey;">I design user interfaces, imagery, and assets for websites, social media, and print.</h1>
            <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#designModal">
                <i class="fs-1 bi bi-plus-circle text-secondary"></i>
            </button>
            <!-- <button class="btn btn-secondary rounded-5 px-4 mt-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#designModal">more</button> -->
                <Modal modalId="designModal" modalDismiss="modal" modalBackground="background: rgb(245, 235, 224);">
                    <Designpage />
                </Modal>
        </div>
      </div>

<!-- development -->
      <div id="development" class="row m-2 p-0">
        <div class="col-lg-4 p-0">
             <div class="m-2">
                <img src="https://picsum.photos/1200/600?random=99" class="w-100 rounded-5 img-full min-vh-75" alt="">
             </div>
        </div>
        <div class="col-lg-8 p-0">
            <div class="left-center p-5 m-2 min-vh-75 rounded-5" style="background: #B08968; color: E6CCB2">
                <h5>development</h5>
                <h1 class="ls-1 lh-1 fw-bold display-3">I build web applications from scratch using a variety of modern tools and frameworks.</h1>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#dev">
                    <i class="fs-1 bi bi-plus-circle text-dark"></i>
                </button>
                <!-- <button class="btn btn-dark rounded-5 px-4 mt-3 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#dev">more</button> -->
                <Modal modalId="dev" modalDismiss="modal" modalBackground="background: rgb(176, 137, 104)" class="text-dark">
                    <Devpage></Devpage>
                    <!-- <About></About> -->
                </Modal>
            </div>
        </div>
      </div>

      <div id="projects" class="row m-3 p-0 rounded-5" style="background: #E6CCB2">
        <div class="col-lg-10 min-vh-75 rounded-5 p-5 m-0 left-center">
            <h5 class="text-dark">projects</h5>
            <h1 class="ls-1 lh-1 fw-bold display-3" style="color: #B08968;">Explore sample projects from a variety of spaces involving a range of build tools, designs, and contexts.</h1>
            <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#projectsModal">
                <i class="fs-1 bi bi-plus-circle" style="color: #B08968"></i>
            </button>
            <!-- <button class="btn btn-secondary rounded-5 px-4 mt-3 fw-bold" style="background: #B08968; border: 1px solid #B08968 !important" type="button" data-bs-toggle="modal" data-bs-target="#projectsModal">more</button> -->
                <Modal modalId="projectsModal" modalDismiss="modal" modalBackground="background: rgb(245, 235, 224);">
                    <Projects />
                </Modal>
        </div>
      </div>

      <div id="contact" class="row m-2 p-0">
        <div class="col-lg-8 p-0">
            <div class="left-center p-5 m-2 min-vh-75 rounded-5" style="background: #D6CCC2">
                <h5 class="text-dark">contact</h5>
                <h1 class="ls-1 lh-1 fw-bold display-3" style="color: grey;">Reach out for more info or to chat about your next project.</h1>
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
             <div class="m-2">
                <img src="https://picsum.photos/id/76/1200/600" class="w-100 rounded-5 img-full min-vh-75" alt="">
             </div>
        </div>
      </div>
    </div>
  </div>
</template>
