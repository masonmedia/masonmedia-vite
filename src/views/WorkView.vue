<script setup>
import { ref, onBeforeMount } from 'vue'
import useAnimation from '../stores/useAnimation'
import useImageLoader from '../stores/useImageLoader'
const repos = ref([]);
const url = 'https://api.github.com/orgs/masonmedia-projects/repos';

const { animate } = useAnimation();
// check image loaded
const { isLoaded, loadImage } = useImageLoader();

function getImageUrl(name, ext) {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}

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
        "microtitle": "Travel Concierge",
        "title": "Prince Collection",
        "stack": "Astro, Vue, Wordpress API, AOS, Bootstrap 5",
        "description": "A custom website built for Prince of Travel's luxury travel concierge brand, Prince Collection. The UI design centers on an existing color palette that was expanded for greater variety, cursive and serif fonts for elegance, and combines the refinement of luxury travel websites with the appeal and accessiblity of travel blogs.",
        "link": "https://prince-collection.netlify.app/",
        "active": false
    },
    {
        "microtitle": "Parent Blog",
        "title": "Return of the Living Dad",
        "stack": "Astro, Vue, AOS, Bootstrap 5",
        "description": "Custom website and CMS built with Astro, Bootstrap and Vue. User interface is simple and clean, with a focus on typography and contrast.",
        "link": "https://returnofthelivingdad.com/",
        "active": false
    },
    {
        "microtitle": "Blockchain/Crypto Wallet",
        "title": "Decentral Inc.",
        "stack": "HTML, CSS, JS, PHP, SWUP, AOS, Bootstrap 4",
        "description": "A custom website built for former cryptocurrency pioneer, Decentral Inc. FOunded by crypto legend Anthony DiIorio and maker of now sunsetted crypto wallet apps, Jaxx and Jaxx Liberty, the Decentral website showcased the company, its values, team, and vision for the future.",
        "link": "https://decentral.ca/",
        "active": false
    },
    // {
    //     "microtitle": "UX/UI Designer",
    //     "title": "Warren Yen",
    //     "stack": "HTML, SCSS, PHP, JS, SWUP, Parcel bundler, Bootstrap 4",
    //     "active": false
    // },
    {
        "microtitle": "Gourmet Cuisine",
        "title": "Copetín",
        "stack": "HTML, CSS, Bootstrap 4, JS",
        "description": "A website mockup for Copetín, the previous gourmet restaurant of Toronto celebrity Chef Claudio Aprile. The project expanded Copetín's previous site with updated imagery and typography, modern layout, expanded branding, logo, and color themes.",
        "link": "https://copetin.netlify.app/",
        "active": false
    },
    {
        "microtitle": "Musician",
        "title": "Neil Whitford",
        "stack": "HTML, PHP, SWUP, JS, Parcel bundler, Bootstrap 4",
        "description": "A custom website build for Toronto musician Neil Whitford. The project included UI/graphic design, photo sourcing, development, UX copywriting and was built with PHP, Bootstrap 4, SWUP.js, rellax.js, and audio embeds from hearthis.at and soundcloud.",
        "link": "https://neilwhitford.com",
        "active": false
    },
    {
        "microtitle": "Music School",
        "title": "Oakwood Guitar School",
        "stack": "React/Gatsby, GraphQL, Markdown, React Bootstrap, React Reveal",
        "description": "Website build for Oakwood Guitar School. The project required a layout optimized for marketing & sales conversions & an elegant UI design. Built with React, Gatsby, React-bootstrap, React-reveal, and required graphic design & UX copywriting.",
        "link": "https://oakwoodguitarschool.com",
        "active": false
    },
    {
        "microtitle": "Education/Ecommerce",
        "title": "Leadership Development App",
        "stack": "Vue, Vue CLI, BootstrapVue, SCSS, Vuex, LMS, i18n",
        "description": "A shopping cart style application using Vue 2, Vuex, BootstrapVue, and animate.css. The project's functionality centers on users selecting from a variety of leadership learning paths, adding resources to a cart, and downloading items for exploration. State is saved both locally and in a learning management system.",
        "link": "https://vue-shopping-cart.pages.dev/",
        "active": false
    },
    {
        "microtitle": "Automotive/Software",
        "title": "Exride",
        "stack": "Logo and branding design mockup",
        "description": "This project proposed logo and branding designs for a cargurus-styles auto-trader website, exride.com. Designs offer a variety of options drawing on and expanding a provided color palette, with explorations of typography, imagery, and use of icons.",
        "link": "https://www.canva.com/design/DAFf_rtAMNI/8SxfTH9bUEq8dhtnfz-M4A/view?#1",
        "active": false
    },
    {
        "microtitle": "Todo List App",
        "title": "Vue Todos",
        "stack": "Vuejs, Bootstrap 5, BootstrapVue, JS, SCSS",
        "description": "A repo exploring the traditional todo app in Vuejs with various layouts and functionalities. App uses Vue 2, BootstrapVue and Bootstrap 5, uses color palettes from happyhues.co, and is deployed on Github Pages.",
        "link": "tps://masonmedia-projects.github.io/vue-todos/ht",
        "active": false
    }
    // {
    //     "microtitle": "Communications",
    //     "title": "Jen Mason Consulting",
    //     "stack": "Vue, Vite, Bootstrap 5, SCSS, GSAP, Cockpit CMS, Netlify",
    //     "active": false
    // }
    // {
    //     "microtitle": "Social Media",
    //     "title": "creator",
    //     "stack": "Vue, Vite, Bootstrap 5, Pinia, HTML, SCSS, API consumption",
    //     "active": false
    // },
]

const images = [
    "https://raw.githubusercontent.com/masonmedia/prince_collection_astro/main/public/images/general/pc_screen_masonmedia.png",
    new URL(`/images/rotld_browser.png`, import.meta.url).href,
    "https://raw.githubusercontent.com/masonmedia-projects/decentral/master/assets/img/dc_browser_screen.png",
    // "https://raw.githubusercontent.com/masonmedia-projects/warren-yen-portfolio/master/img/wy_browser_screen.png",
    "https://raw.githubusercontent.com/masonmedia-projects/copetin/master/img/copetin_browser_ss.png",
    "https://raw.githubusercontent.com/masonmedia-projects/neil-whitford/master/assets/img/neil_whitford_browser_ss.png",
    "https://raw.githubusercontent.com/masonmedia-projects/oakwood-guitar-school/master/static/ogs_social_banner.png",
    "https://raw.githubusercontent.com/masonmedia-projects/vue-shopping-cart/master/public/ldt-homepage.png",
    new URL(`/images/exride_demo.png`, import.meta.url).href,
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

      <div class="row row min-vh-75 m-3 rounded-5 shadow bg-dark text-light">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
            <h5 class="fs-3 mb-3">What I do</h5>
            <h1 class="display-4 lh-1 ls-1 fw-900">The projects below use a variety of technologies and span a range of spaces from startups to education, business, music, and blockchain.</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
      </div>

      <div class="container-fluid">
          <!-- <div class="row py-3 m-3">
            <div class="col-lg-4 col-md-6 p-0">
                <div class="bg-light border shadow m-2 p-5 rounded-5" style="min-height: 350px;">
                    <h3 class="h2 fw-bold ls-base">Intro</h3>
                    <p class="text-uppercase">The projects below were built from scratch using a range of technologies, design approaches, UX/UI goals, and deployment solutions.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 p-0">
                <div class="bg-light border shadow m-2 p-5 rounded-5" style="min-height: 350px;">
                <h3 class="h2 fw-bold ls-base">Languages</h3>
                <p class="text-uppercase">HTML5, CSS3, SASS, JAVASCRIPT, (SOME) PHP, WORDPRESS, HEADLESS CMS, API CONSUMPTION, JSON DATA STRUCTURE DESIGN, AODA/A11Y, I18N, SEO.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 p-0">
                <div class="bg-light border shadow m-2 p-5 rounded-5" style="min-height: 350px;">
                <h3 class="h2 fw-bold ls-base">Animation</h3>
                <p class="text-uppercase">Greensock Animation Platform (GSAP), AOS (animate on scroll), animate.css, animista, CSS Keyframes and Transitions.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 p-0">
                <div class="bg-light border shadow m-2 p-5 rounded-5" style="min-height: 350px;">
                <h3 class="h2 fw-bold ls-base">Project Management</h3>
                <p>GITHUB, BITBUCKET, ASANA, CLICKUP, AGILE, GOOGLE SUITE, MICROSOFT 365, ZOOM, SLACK, MARKETING CRM (PARDOT, HUBSPOT, MAILCHIMP, SENDGRID)</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="bg-light border shadow m-1 p-5 rounded-5" style="min-height: 350px;">
                <h3 class="h2 fw-bold ls-base">Deployment</h3>
                <p>SHARED HOSTING, CPANEL, CLOUD HOSTING (NETLIFY, VERCEL, GITHUB PAGES, ETC), DOMAIN MANAGEMENT, DNS, LOAD SPEED OPTIMIZATION.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 p-0">
                <div class="bg-light border shadow m-2 p-5 rounded-5" style="min-height: 350px; background-color: hotpink;">
                <h3 class="h2 fw-bold ls-base">Current</h3>
                <p>MY LATEST TECH STACK FOCUS INCLUDES ASTRO, VUE 3, PINIA, BOOTSTRAP 5+, SASS, GSAP, AND CLOUD DEPLOYMENT USING NETLIFY, GITHUB PAGES, & CLOUDFLARE PAGES.</p>
                </div>
            </div>
            </div> -->

            <div class="container">

            <!-- <hr class="w-100 text-secondary"> -->

            <div class="row" v-for="(item, index) in titles" :key="index">
                <div class="col-lg-6 left-center order-2 order-lg-1">
                    <div class="m-0 m-lg-3 p-4" v-if="titles[index]">
                       
                        <h2 class="up fw-900 lh-1 ls-1 mb-4 display-4" style="letter-spacing: -4px;">{{ titles[index].title }}</h2>
                        <p class="up text-secondary fst-italic">{{ titles[index].stack }}</p>
                        <p class="fs-5">{{ titles[index].description }}</p>
                        <a :href="item.link" target="_blank">
                            <button role="button" class="btn btn-dark px-4 py-2 me-2 rounded-3">site</button>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 left-center">
                    <img :src="images[index]" alt="">
                </div>
            </div>

              <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="up accordion-item border-0 pb-3" :class="repos.length-1 ? 'mt-3' : 'my-3'"
                style="background: transparent"
                v-for="(item, index) in repos" :key="index">
                    <div class="up row" v-if="repos && index != 1"
                    data-bs-toggle="collapse" :data-bs-target="'#item_' + index" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div class="col-lg-5 left-center order-2 order-lg-1">
                            <div class="m-0 m-lg-3 p-4" v-if="titles[index]">
                                <h5 class="up">{{ titles[index].microtitle }}</h5>
                                <h1 class="up fw-900 lh-1 ls-1 mb-4 display-2" style="letter-spacing: -4px;">{{ titles[index].title }}</h1>
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
              </div> -->
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