<script setup>
import { ref, onBeforeMount } from 'vue'
import useAnimation from '../stores/useAnimation'
import useImageLoader from '../stores/useImageLoader'
const repos = ref([]);
const url = 'https://api.github.com/orgs/masonmedia-projects/repos';

const { animate } = useAnimation();
// check image loaded
const { isLoaded, loadImage } = useImageLoader();

fetch(url)
.then(response => response.json())
.then((data) => {
    repos.value = data;
    console.log(repos.value)
})

// image paths
const imgUrl = new URL('@/assets/img/angles.svg', import.meta.url).href

const titles = [
    {
        "microtitle": "Blockchain/Crypto Wallet",
        "title": "Decentral Inc.",
        "stack": "HTML, CSS, JS, PHP, SWUP, AOS, Bootstrap 4",
        "active": false
    },
    {
        "microtitle": "UX/UI Designer",
        "title": "Warren Yen",
        "stack": "HTML, SCSS, PHP, JS, SWUP, Parcel bundler, Bootstrap 4",
        "active": false
    },
    {
        "microtitle": "Gourmet Cuisine",
        "title": "Copetín",
        "stack": "HTML, CSS, Bootstrap 4, JS",
        "active": false
    },
    {
        "microtitle": "Musician",
        "title": "Neil Whitford",
        "stack": "HTML, PHP, SWUP, JS, Parcel bundler, Bootstrap 4",
        "active": false
    },
    {
        "microtitle": "Music School",
        "title": "Oakwood Guitar School",
        "stack": "React/Gatsby, GraphQL, Markdown, React Bootstrap, React Reveal",
        "active": false

    },
    {
        "microtitle": "Education/Ecommerce",
        "title": "Leadership Development App",
        "stack": "Vue, Vue CLI, BootstrapVue, SCSS, Vuex, LMS, i18n",
        "active": false
    },
    {
        "microtitle": "Todo List App",
        "title": "Vue Todos",
        "stack": "Vuejs, Bootstrap 5, BootstrapVue, JS, SCSS",
        "active": false
    },
    {
        "microtitle": "Communications",
        "title": "Jen Mason Consulting",
        "stack": "Vue, Vite, Bootstrap 5, SCSS, GSAP, Cockpit CMS, Netlify",
        "active": false
    },
    {
        "microtitle": "Social Media",
        "title": "creator",
        "stack": "Vue, Vite, Bootstrap 5, Pinia, HTML, SCSS, API consumption",
        "active": false
    },
]

const images = [
    "https://raw.githubusercontent.com/masonmedia-projects/decentral/master/assets/img/dc_browser_screen.png",
    "https://raw.githubusercontent.com/masonmedia-projects/warren-yen-portfolio/master/img/wy_browser_screen.png",
    "https://raw.githubusercontent.com/masonmedia-projects/copetin/master/img/copetin_browser_ss.png",
    "https://raw.githubusercontent.com/masonmedia-projects/neil-whitford/master/assets/img/neil_whitford_browser_ss.png",
    "https://raw.githubusercontent.com/masonmedia-projects/oakwood-guitar-school/master/static/ogs_social_banner.png",
    "https://raw.githubusercontent.com/masonmedia-projects/vue-shopping-cart/master/public/ldt-homepage.png",
    "https://raw.githubusercontent.com/masonmedia-projects/vue-todos/master/public/mm_vue_todos_screen.png",
    "https://raw.githubusercontent.com/masonmedia-projects/vue-vite-jmc/master/public/jmc-homepage.png",
    "https://raw.githubusercontent.com/masonmedia-projects/viral-nation-demo/master/public/vn-homepage.png"
]

onBeforeMount(() => {
    animate();
})

</script>

<template>
    <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4 min-vh-100">
    <!-- <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4 min-vh-100" :style="{ 'background' : 'url('+ imgUrl +') center repeat'}"> -->
        
<!-- work -->
    <!-- <div class="row m-0 position-relative min-vh-100">
        <div class="up col-lg-12 pb-5 m-0 center-center">
          <h1 class="up fw-900 lh-1 pb-5 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">Work</h1>
          
          <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up fw-light text-uppercase mb-2 mb-lg-4 pb-3 font-antonio" style="color: #DDB892; letter-spacing: -5px; font-size: 15vmin; transform: scale(1.9,2); ">Work</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">Selection of projects</h2>
          </div>
         
        </div>
      </div> -->

      <div class="row m-0">
        <div class="up col-lg-12 p-5 min-vh-50 m-0 left-center"> 
          <h1 class="display-1 fw-bold lh-1 ls-1" style="letter-spacing: -5px;">Work</h1>
        </div>
      </div>

        <div class="row m-0">
            <div class="col-sm-12 p-0 min-vh-50">
            <TransitionGroup name="fade" mode="out-in">
                <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50"></div>
                <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full min-vw-100" src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483&q=80" alt="">
            </TransitionGroup>
            </div>
        </div>

      <div class="container">
          <div class="row px-3 px-md-4">
            <div class="col-lg-8 py-5">
                <h1 class="fw-bold lh-1 ls-1" style="letter-spacing: -3px;">Explore some of my work below. All projects were built from scratch using a variety of technologies. <span class="text-secondary">*As a caveat, some live production sites I built are not maintained or controlled by me, and for others I've used custom hosting solutions to ensure original project parameters are presented.</span></h1>
            </div>

            <hr class="w-100 text-secondary">

            <div class="col-lg-4 p-4">
                <h3 class="h2 fw-bold ls-base">Intro</h3>
                <p class="text-uppercase">The projects below were built from scratch using a range of technologies, design approaches, UX/UI goals, and deployment solutions.</p>
            </div>
            <div class="col-lg-4 p-4">
                <h3 class="h2 fw-bold ls-base">Languages</h3>
                <p class="text-uppercase">HTML5, CSS3, SASS, JAVASCRIPT, (SOME) PHP, WORDPRESS, HEADLESS CMS, API CONSUMPTION, JSON DATA STRUCTURE DESIGN, AODA/A11Y, I18N, SEO.</p>
            </div>
            <div class="col-lg-4 p-4">
                <h3 class="h2 fw-bold ls-base">Animation</h3>
                <p class="text-uppercase">Greensock Animation Platform (GSAP), AOS (animate on scroll), animate.css, animista, CSS Keyframes and Transitions.</p>
            </div>
            <div class="col-lg-4 p-4">
                <h3 class="h2 fw-bold ls-base">Project Management</h3>
                <p>GITHUB, BITBUCKET, ASANA, CLICKUP, AGILE, GOOGLE SUITE, MICROSOFT 365, ZOOM, SLACK, MARKETING CRM (PARDOT, HUBSPOT, MAILCHIMP, SENDGRID)</p>
            </div>
            <div class="col-lg-4 p-4">
                <h3 class="h2 fw-bold ls-base">Deployment</h3>
                <p>SHARED HOSTING, CPANEL, CLOUD HOSTING (NETLIFY, VERCEL, GITHUB PAGES, ETC), DOMAIN MANAGEMENT, DNS, LOAD SPEED OPTIMIZATION.</p>
            </div>
            <div class="col-lg-4 p-4">
                <h3 class="h2 fw-bold ls-base">Current</h3>
                <p>MY LATEST TECH STACK FOCUS INCLUDES VUE 3, PINIA, BOOTSTRAP 5+, SASS, GSAP, AND CLOUD DEPLOYMENT USING NETLIFY, GITHUB PAGES, & CLOUDFLARE PAGES.</p>
            </div>

            <hr class="w-100 text-secondary">

              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="up accordion-item border-0 pb-3" :class="repos.length-1 ? 'mt-3' : 'my-3'"
                style="background: transparent"
                v-for="(item, index) in repos" :key="index">
                    <div class="up row" v-if="repos"
                    data-bs-toggle="collapse" :data-bs-target="'#item_' + index" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div class="col-lg-5 left-center order-2 order-lg-1">
                            <div class="m-0 m-lg-3 p-4" v-if="titles[index]">
                                <!-- get title and genre from titles array -->
                                <h5 class="up">{{ titles[index].microtitle }}</h5>
                                <h1 class="up fw-bold lh-1 ls-1 mb-4 display-2" style="color: #7F5539; letter-spacing: -4px;">{{ titles[index].title }}</h1>
                                <button role="button" class="btn btn-dark px-4 py-2 me-2 rounded-3">more</button>
                                <a :href="item.html_url" target="_blank">
                                    <button role="button" class="btn btn-dark px-4 py-2 me-2 rounded-3">code</button>
                                </a>
                                <a :href="item.homepage" target="_blank">
                                    <button role="button" class="btn btn-dark px-4 py-2 me-2 rounded-3">site</button>
                                </a>
                            </div>
                        </div>
                        <div class="up col-lg-7 center-center order-1 order-lg-2">
                            <img :src="images[index]" alt="">
                        </div>
                    </div>

                    <!-- <div class="border-bottom" :class="index === 8 ? 'border-0' : ''"></div> -->

                    <!-- accordion body -->
                    <div :id="'item_' + index" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-5" :class="index === 8 ? 'border-0' : ''"
                    v-if="titles[index]">
                    <div class="pe-0 pe-md-3">
                        <h5 class="up pb-3 text-secondary">{{ titles[index].stack }}</h5>
                        <h2 class="fw-bold" style="letter-spacing: -1px;">{{ item.description }}</h2>
                        </div>

                    </div>
                    </div>
                </div>
              </div>
          </div>

<!-- original alternating bg colors with % 
    <div class="row rounded-5 my-3 mx-0 py-3" v-for="(item, index) in repos" :key="index" style="background: #EDE0D4" :style="index % 2 != 0 ? 'background: white' : index % 2 === 0 ? 'background: #DDB892' : ''"> -->
        
        <!-- <div class="row rounded-5 mx-0 py-3" 
        :class="repos.length-1 ? 'mt-3' : 'my-3'"
        v-for="(item, index) in repos" :key="index">
            <div class="col-lg-5 left-center order-2 order-lg-1 font-antonio">
                <div class="m-0 m-lg-3 p-4">
                    <div>
                        <h5 class="up font-antonio">{{ titles[index].microtitle }}</h5>
                        <h1 class="up fw-bold lh-1 ls-1 mb-4 text-uppercase display-2 font-antonio">{{ titles[index].title }}</h1>
                    </div>
                    <a :href="item.html_url" target="_blank" class="me-2">
                        <button class="btn btn-sm btn-outline-light px-4 ">code</button>
                    </a>
                    <a :href="item.homepage" target="_blank">
                        <button class="btn btn-sm btn-outline-light px-4">site</button>
                    </a>
                </div>
            </div>

            <div class="up col-lg-7 center-center order-1 order-lg-2">
                <img :src="images[index]" alt="">
            </div>
        </div> -->
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>