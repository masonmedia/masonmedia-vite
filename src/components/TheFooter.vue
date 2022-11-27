<template>
    <footer>
        <div id="footer" class="container-fluid p-0">
            <div class="row p-5 font-antonio" style="background: #7F5539; color: #DDB892">
                <div class="col-lg-3 col-md-6 top-center">
                    <ul class="list-unstyled fs-4 fw-bold text-uppercase">
                        <router-link v-for="(route, index) in router.options.routes" :key="index"
                            :to="route.path">
                            <li class="nav-item d-flex flex-column">
                                {{ route.name }}
                            </li>
                        </router-link>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 top-center">
                    <ul class="list-unstyled fs-4 fw-bold text-uppercase">
                        <a href="https://github.com/masonmedia/" target="_blank">
                            <li class="nav-item">Github</li>
                        </a>
                        <a href="https://medium.com/@andrewmasonmedia" target="_blank">
                            <li class="nav-item">Medium</li>
                        </a>
                        <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank">
                            <li class="nav-item">Linkedin</li>
                        </a>
                        <a href="https://www.behance.net/andrewmasonmedia" target="_blank">
                            <li class="nav-item">Behance</li>
                        </a>
                        <a href="mailto:bassfx@duck.com" target="_blank">
                            <li class="nav-item">Email</li>
                        </a>
                    </ul>
                </div>
                <div class="col-lg-6 top-center py-3 py-lg-0">
                    <ul class="list-unstyled">
                        <li class="fs-4 nav-item font-antonio fw-bold pb-2">Privacy</li>
                        <li>This site does not track or collect visitor data. It does not use analytics, track referrals, follow user movement through the site, monitor IP addresses, set cookies or otherwise track visitor behaviour.</li>
                        <li class="fs-5 fw-bold mt-2">
                            <i class="bi bi-shield-lock-fill"></i> Mason Media {{ year }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const location = useRoute();
const router = useRouter();

const date = new Date().toLocaleString(); // day, month, year + time
const year = new Date().getFullYear()
</script>