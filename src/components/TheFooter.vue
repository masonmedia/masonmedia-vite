<template>
    <footer>
        <div id="footer" class="container-fluid p-0">
            <div class="row p-5" style="background: #7F5539; color: #DDB892">
                <div class="col-lg-3 col-md-6 left-center">
                    <ul class="list-unstyled fs-4 fw-bold">
                        <li>
                            <router-link class="nav-item" to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link class="nav-item" to="/projects">Projects</router-link>
                        </li>
                        <li>
                            <router-link class="nav-item" to="/development">Development</router-link>
                        </li>
                        <li>
                            <router-link class="nav-item" to="/design">Design</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <ul class="list-unstyled fs-4 fw-bold">
                        <li>
                            <a href="https://github.com/masonmedia/" target="_blank">Github</a>
                        </li>
                        <li>
                            <a href="https://medium.com/@andrewmasonmedia" target="_blank">Medium</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/andrewmasonmedia" target="_blank">Behance</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 top-center py-3 py-lg-0">
                    <ul class="list-unstyled">
                        <li class="fw-bold pb-2">Privacy</li>
                        <li>This site does not collect user or visitor data of any kind. It does not track referrals, follow user movement through the site, monitor IP addresses, collect or use analytics, set cookies or otherwise make use of visitor behaviour.</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
//     gsap.from('#footer', {
//     duration: 1.5,
//     opacity: 0,
//     y: -10,
//   })
})
</script>