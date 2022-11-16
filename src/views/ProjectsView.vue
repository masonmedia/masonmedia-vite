<template>
<div class="pt-3 pt-lg-5 mt-3 mt-lg-5">
    <div class="container">
        <!-- <div class="row p-0 m-0"> -->
        
<h1 class="display-1 lh-1 ls-1 fw-900 pb-4">Projects.</h1>

<img width="1200" height="500" style="background: grey" src="https://picsum.photos/id/87/1200/500" class="w-100 rounded-5 img-full" alt="">

<!-- num % 2 === 1 -->
<div class="row rounded-5 my-3 mx-0 py-3" v-for="(item, index) in repos" :key="index" style="background: #EDE0D4" :style="index % 2 != 0 ? 'background: #EDE0D4' : index % 2 === 0 ? 'background: #DDB892' : ''">    
    <div class="col-lg-6 left-center order-2 order-lg-1">
        <div class="m-0 m-lg-3 p-4">
            <!-- <h1 class="fw-bold lh-1 ls-1 mb-3">{{ repoTitles[index] }}</h1> -->
            <div class="">
                <!-- get title and genre from titles array -->
                <h5>{{ titles[index].microtitle }}</h5>
            <h1 class="fw-bold lh-1 ls-1 mb-3">{{ titles[index].title }}</h1>
            </div>
            <p class="h5 fw-bold pb-3">{{ item.description }}</p>
            <a :href="item.html_url" target="_blank" class="me-2">
                <button class="btn btn-outline-dark btn-sm fw-bold px-4 rounded-3">code</button>
            </a>
            <a :href="item.homepage" target="_blank">
                <button class="btn btn-outline-dark btn-sm fw-bold px-4 rounded-3">site</button>
            </a>
        </div>
    </div>

<div class="col-lg-6 center-center order-1 order-lg-2">
    <img :src="images[index]" alt="">
    <!-- <img v-if="index === 0" src="https://raw.githubusercontent.com/masonmedia-projects/decentral/master/assets/img/dc_browser_screen.png" class="" alt="...">
    <img v-if="index === 1" src="https://raw.githubusercontent.com/masonmedia-projects/warren-yen-portfolio/master/img/wy_browser_screen.png" class="card-img-top" alt="...">
    <img v-if="index === 2" src="https://raw.githubusercontent.com/masonmedia-projects/copetin/master/img/copetin_browser_ss.png" class="card-img-top" alt="...">
    <img v-if="index === 3" src="https://raw.githubusercontent.com/masonmedia-projects/neil-whitford/master/assets/img/neil_whitford_browser_ss.png" class="card-img-top" alt="...">
    <img v-if="index === 4" src="https://raw.githubusercontent.com/masonmedia-projects/oakwood-guitar-school/master/static/ogs_social_banner.png" class="card-img-top" alt="...">
    <img v-if="index === 5" src="https://raw.githubusercontent.com/masonmedia-projects/vue-shopping-cart/master/public/ldt-homepage.png" class="card-img-top" alt="...">
    <img v-if="index === 6" src="https://raw.githubusercontent.com/masonmedia-projects/vue-vite-jmc/master/public/jmc-homepage.png" class="card-img-top" alt="..."> -->
</div>
</div>

<!-- <div class="col-lg-12" v-for="(item, index) in repos" :key="index">
    <div class="border-start border-dark ps-3 my-3">
        <img v-if="index === 0" class="w-25 rounded-4" src="https://raw.githubusercontent.com/masonmedia-projects/oakwood-guitar-school/master/static/ogs_social_banner.png" alt="">
    <h5 class="small">{{ item.language }}</h5>
    <h1 class="fw-bold lh-1 ls-1">{{ item.name }}</h1>
    <p>{{ item.description }}</p>
    <p>{{ item.labels_url}}</p>
    <a :href="item.html_url" target="_blank" class="me-2">
        <button class="btn btn-dark">code</button>
    </a>
    <a :href="item.homepage" target="_blank">
        <button class="btn btn-dark">site</button>
    </a>
    </div>
</div> -->

        <!-- </div> -->
    </div>
</div>
      
    
</template>

<script setup>
import { ref } from 'vue'
const repos = ref([]);
const url = 'https://api.github.com/orgs/masonmedia-projects/repos';

fetch(url)
.then(response => response.json())
.then((data) => {
    repos.value = data;
    console.log(repos.value)
})

const titles = [
    {
        "microtitle": "Blockchain/Crypto Wallet",
        "title": "Decentral Inc."
    },
    {
        "microtitle": "UX/UI Designer",
        "title": "Warren Yen"
    },
    {
        "microtitle": "Gourmet Cuisine",
        "title": "Coptín"
    },
    {
        "microtitle": "Musician",
        "title": "Neil Whitford"
    },
    {
        "microtitle": "Music School",
        "title": "Oakwood Guitar School"
    },
    {
        "microtitle": "Education/Ecommerce",
        "title": "Leadership Development App"
    },
    {
        "microtitle": "Communications",
        "title": "Jen Mason Consulting"
    },
    {
        "microtitle": "Social Media",
        "title": "creator"
    }
]

const images = [
    "https://raw.githubusercontent.com/masonmedia-projects/decentral/master/assets/img/dc_browser_screen.png",
    "https://raw.githubusercontent.com/masonmedia-projects/warren-yen-portfolio/master/img/wy_browser_screen.png",
    "https://raw.githubusercontent.com/masonmedia-projects/copetin/master/img/copetin_browser_ss.png",
    "https://raw.githubusercontent.com/masonmedia-projects/neil-whitford/master/assets/img/neil_whitford_browser_ss.png",
    "https://raw.githubusercontent.com/masonmedia-projects/oakwood-guitar-school/master/static/ogs_social_banner.png",
    "https://raw.githubusercontent.com/masonmedia-projects/vue-shopping-cart/master/public/ldt-homepage.png",
    "https://raw.githubusercontent.com/masonmedia-projects/vue-vite-jmc/master/public/jmc-homepage.png",
    "https://raw.githubusercontent.com/masonmedia-projects/viral-nation-demo/master/public/vn-homepage.png"
]

</script>

<style lang="scss" scoped>

</style>