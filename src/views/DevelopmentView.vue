
<script setup>
import { onMounted } from 'vue'
import useAnimation from '../stores/useAnimation'
const { animate } = useAnimation();

onMounted(() => {
  animate();
})
</script>

<template>
  <!-- <div class="pt-3 pt-lg-5 mt-3 mt-lg-5"> -->
    <div>
    <div class="container-fluid px-0 pt-0 pt-lg-5 mt-0 mt-lg-4 bg-dark text-secondary" style="background: url('src/assets/img/angles.svg') center repeat; background-size: 100%">
      <div class="row m-0">
        <div class="up col-lg-12 min-vh-100 pb-5 m-0 center-center position-relative">
          <h1 class="up fw-900 lh-1 pb-5 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 45vmin; transform: scale(1.9,2); font-weight: 400; color: #7F5539">Code</h1>
          
          <!-- <h2 class="up fw-light text-uppercase position-absolute z-1 top-50 start-50 translate-middle pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">Frontend Development</h2> -->
          <div class="position-absolute z-1 top-50 start-50 translate-middle ">
            <h1 class="up fw-light text-uppercase mb-5 font-antonio" style="color: #DDB892; letter-spacing: -5px; font-size: 15vmin; transform: scale(1.9,2); ">Code</h1>
            <h2 class="up fw-light text-uppercase pb-5 font-antonio" style="color: #DDB892; letter-spacing: -1px;">Frontend Development</h2>
          </div>
        </div>
      </div>

      <!-- <hr class="text-secondary w-75 mx-auto"> -->

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">01.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">01. Intro</h3>
           <h1 class="up fs-1 lh-1 text-uppercase font-antonio fw-900">I build custom frontend solutions from user interfaces to websites, blogs and headless CMS<span class="text-lowercase">s</span>, landing pages, and ecommerce sites - all with a focus on SEO and page speed optimization.</h1>
        </div>
      </div>
      
      <div class="row m-2 p-0 min-vh-100 position-relative">
        <!-- <div class="position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">02.</h1>
        </div> -->

        <div class="up col-lg-12 left-center p-5">
            <h3 class="up font-antonio fw-light border-top border-secondary text-uppercase w-100 pt-3">02. languages</h3>
           <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">HTML5, CSS3, SASS, Javascript, (some) PHP, Wordpress, Headless CMS, API consumption, JSON data structure design, AODA/a11y, i18n, SEO.</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">03.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">03. frameworks + tools</h3>
           <h1 class="up lh-1 text-uppercase font-antonio fw-900 display-4">Vue/Nuxt, React/Gatsby, Bootstrap + BootstrapVue, Tailwind CSS, npm, node.js, terminal, VS Code, Learning Management Systems, Saba and Saba Cloud.</h1>
        </div>
      </div>

    <!-- project management -->
    <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="up col-lg-12 d-flex flex-column justify-content-center align-items-end text-end p-5">
            <h3 class="up font-antonio fw-light text-uppercase border-top border-secondary w-100 pt-3">04. project management</h3>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-1 fw-900">Github, Bitbucket, Asana, Clickup, Agile, Google suite, Microsoft 365, Zoom, Slack, Marketing CRM (Pardot, Hubspot, Mailchimp, Sendgrid)</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 p-5 top-center">
            <h1 class="up display-1 text-secondary font-antonio fw-900 border-top border-secondary" style="font-size: 55vmin;">05.</h1>
        </div>
        <div class="up col-lg-7 left-center p-5">
          <h3 class="up font-antonio fw-light text-uppercase w-100 pt-3">05. Deployment</h3>
          <h1 class="up lh-1 text-uppercase font-antonio fw-900 display-4">Shared hosting, cPanel, cloud hosting (Netlify, Vercel, Github Pages, etc), domain management, DNS, load speed optimization.</h1>
           <router-link to="/work">
                <button class="btn ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div>

    <!-- work -->
    <!-- <div class="row m-2 p-0 min-vh-100 position-relative">
        <div class="up position-absolute z-0 w-100 top-50 start-50 translate-middle center-center pb-5">
            <h1 class="up z-0 ls-1 lh-1 text-uppercase font-antonio" style="letter-spacing: -18px; font-size: 85vmin; font-weight: 400; color: #FFFFFF10">Work</h1>
        </div>

        <div class="up col-lg-12  left-center p-5">
            <h5 class="up font-antonio">Work</h5>
            <h1 class="up ls-1 lh-1 text-uppercase font-antonio display-3">Explore some of my work from a variety of spaces using a range of frameworks, build tools, designs, and approches.</h1>
            <router-link :to="$router.options.routes[4]">
                <button class="btn stretched-link ps-0" type="button">
                    <i class="fs-1 bi bi-plus-circle text-secondary"></i>
                </button>
            </router-link>
        </div>
      </div> -->

      <!-- <div id="contact" class="row m-2 p-0">
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
      </div> -->
    </div>
    <!-- <DevPage /> -->
  </div>
</template>

<style>
</style>
