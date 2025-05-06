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
      <div class="row px-4 min-vh-700">
        <div class="col-lg-10 d-flex flex-column justify-content-center align-items-start text-start p-4 p-lg-5">
            <!-- <h1 class="fw-900 site-title">I'm a passionate frontend developer & visual designer driven to create beautiful digital experiences.</h1> -->
            <h1 class="h4 ls-base">Andrew Mason · Frontend Developer · Visual Designer · Writer</h1>
            <h2 class="fw-900 site-title">I craft beautiful, functional digital experiences with code, design, and storytelling.</h2>
            <!--<h1 class="fw-900 site-title">Developer. <span class="text-success">Designer.</span><span class="text-primary">Writer.</span> <span class="text-danger">Musician.</span></h1>-->
            <!--<p class="col-md-9 fs-4 mt-3 mb-0 lh-base">I'm a passionate frontend developer & visual designer driven to create beautiful and effective digital experiences.</p>-->
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>`
        </div>
      </div>

      <!-- about -->

      <div class="row min-vh-700 m-3 p-3 bg-dark text-light rounded-5 shadow">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center order-2 order-lg-1">
            <h1 class="h4 ls-base">What I build</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">Modern Websites, CMS<span class="small p">s</span>, & Web Applications</h2>
            <p class="fs-5 my-3 col-md-11">I have extensive experience building websites and applications for a range of purposes (blog, travel, ecomm, art/music, user interfaces, personal websites) from scratch using a variety of modern technologies. I build headless and traditional CMSs, have extensive experience with Wordpress, build and consume APIs, and use Vue, Astro, and Bootstrap as core frontend technologies.</p>
            <router-link to="/about">
                <button class="btn btn-light rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1" @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg rounded-5 col-12 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.pexels.com/photos/4752708/pexels-photo-4752708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- design -->

      <div class="row min-vh-700 m-3 rounded-5 shadow p-3" style="background:#d6d6d6;">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center order-1 order-lg-2">
            <!-- <h5 class="mb-3">What I do</h5> -->
            <h1 class="h4 ls-base">From Idea to Interface</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">UI/UX & Visual Storytelling</h2>
            <p class="fs-5 my-3 col-md-11">Design is at the core of everything I do. I craft intuitive user interfaces and engaging visuals across digital and print. I’m passionate about animation — from subtle transitions to advanced SVG and GSAP techniques — and I thrive in the space where design and development meet.</p>
            <router-link to="/about">
                <button class="btn btn-dark rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1" @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg rounded-5 col-12 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.pexels.com/photos/4252890/pexels-photo-4252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- hosting -->

    <div class="row min-vh-700 m-3 rounded-5 shadow text-light p-3" style="background:#444444;">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center order-2 order-lg-1 ">
            <!-- <h5 class="mb-3">What I do</h5> -->
            <h1 class="h4 ls-base">Infrastructure</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">Hosting, Domains, & Cloud Tools</h2>
            <p class="fs-5 my-3 col-md-11">I bring a full-stack mindset to frontend work. I’m experienced with both traditional shared hosting and modern serverless platforms like Netlify and Vercel. I handle DNS, email, analytics, and automation with ease, ensuring everything behind the scenes runs smoothly.</p>
            <router-link to="/work">
                <button class="btn btn-light rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1" @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg rounded-5 col-12 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.pexels.com/photos/25626445/pexels-photo-25626445/free-photo-of-camputing-fields-designs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- blWritingog -->

    <div class="row p-0 min-vh-700 m-3 rounded-5 shadow" style="background:#d6d6d6;">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center order-1 order-lg-2">
            <h1 class="h4 ls-base">AI & Emerging Tech</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">Leveraging AI in Design & Development</h2>
            <p class="fs-5 my-3 col-md-11">I integrate a range of AI tools into my workflow to enhance efficiency, creativity, and quality. From code generation and review to content development and image creation, I use platforms like ChatGPT, Loveable, GitHub Copilot, and various image generation tools to accelerate development and spark new ideas. AI has become an essential layer in how I think, design, and build.</p>
            <router-link to="/work">
                <button class="btn btn-dark rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4 order-2 order-lg-1">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" style="filter: grayscale(1)" src="https://images.unsplash.com/photo-1540760938999-077b8231d890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- projects -->

      <div class="row min-vh-700 m-3 p-3 rounded-5 bg-dark text-light shadow">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center">
            <h1 class="h4 ls-base">Projects</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">Real-World Experience Across Industries</h2>
            <p class="fs-5 my-3 col-md-11">I’ve contributed to startups and enterprises across blockchain, education, healthcare, and fintech. My current preferred stack includes Vue 3, Astro, Bootstrap 5, GSAP for animation, and Netlify for fast deployment. I focus on clean, maintainable code and scalable architecture.</p>
            <router-link to="/work">
                <button class="btn btn-light rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <!-- <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" src="https://images.pexels.com/photos/2538089/pexels-photo-2538089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""> -->
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" style="filter: grayscale(1)" src="https://images.unsplash.com/photo-1625834384234-fd4eb7fe121f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
        </TransitionGroup>
        </div>
      </div>

    <!-- Writing -->

    <div class="row p-0 min-vh-700 m-3 rounded-5 shadow" style="background:#d6d6d6;">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center order-2 order-lg-1">
            <h1 class="h4 ls-base">Writing</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">Clear, Insightful, and Engaging Content</h2>
            <p class="fs-5 my-3 col-md-11">I bring a strong background in both technical and creative content. I maintain a blog where I write about coding, design, and JavaScript, breaking down complex topics for a wide audience. I also author a parenting blog, sharing personal experiences with depth and humor. Whether it's UX copy, documentation, or storytelling, I write with purpose and clarity.</p>
            <router-link to="/blog">
                <button class="btn btn-dark rounded-5 mt-3 px-4 fw-bold" type="button">
                    More
                </button>
            </router-link>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <!-- <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" style="filter: grayscale(1)" src="https://images.unsplash.com/photo-1540760938999-077b8231d890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt=""> -->
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" style="filter: grayscale(1)" src="https://images.unsplash.com/photo-1593791718814-b720d7979607?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </TransitionGroup>
        </div>
      </div>

      <!-- contact -->

      <div class="row p-3 min-vh-700 text-light m-3 rounded-5 shadow" style="background-color:dimgrey;">
        <div class="col-lg-6 p-4">
            <TransitionGroup name="fade" mode="out-in">
            <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 rounded-5 img-full"></div>
            <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in img-full rounded-5" style="filter: grayscale(1)" src="https://images.pexels.com/photos/4097618/pexels-photo-4097618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
        </TransitionGroup>
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-50 p-4 p-lg-5 left-center">
            <h1 class="h4 ls-base">Connect</h1>
            <h2 class="display-1 lh-1 ls-1 fw-900">Links & Resources</h2>
            <p class="fs-5 my-3 col-md-11">Check out my <a href="https://github.com/masonmedia-projects/" target="_blank">Github</a>, <a href="https://www.behance.net/andrewmasonmedia" target="_blank">Behance</a>, and <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank">Linkedin</a> profiles for more info, and samples of code, design, and work. Reach out below for more info.</p>
            <a href="mailto:bassfx@duck.com">
                <button class="btn btn-light mt-3 px-4 rounded-5 fw-bold">Get in touch</button>
            </a>
        </div>
      </div>
      
    </div>
  </div>
</template>
