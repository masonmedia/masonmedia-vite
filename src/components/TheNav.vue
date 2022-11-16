<template>
    <div class="w-100">
        <div class="w-100 border-bottom d-lg-none d-flex">
            <router-link class="navbar-brand p-3 fw-900 fs-5" to="/">m.</router-link>

            <button class="btn ms-auto my-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <i class="fs-2 bi bi-justify"></i>
            </button>
        </div>
        <!-- nav -->
        <nav class="navbar p-3 fixed-top d-none d-lg-block w-100" style="background: #D6CCC2">
        <!-- <nav class="navbar p-3 fixed-top d-none d-lg-block w-100" :class="location.path === '/' ? 'border-bottom border-secondary' : 'bg-light border-bottom'" :style="location.path === '/' ? 'background: #D6CCC2' : ''"> -->
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">m.</router-link>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/about">about</router-link>
                        <!-- <a class="nav-link" aria-current="page" href="#about">about</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/design">design</router-link>
                        <!-- <a class="nav-link" href="#design">design</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/development">development</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/projects">projects</router-link>
                         <!-- <a class="nav-link" href="#projects">projects</a> -->
                    </li>
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" aria-current="page" to="/">contact</router-link> -->
                         <a class="nav-link" href="mailto:andrewmasonmedia@gmail.com">contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>

        <div class="offcanvas offcanvas-end border-bottom" tabindex="-1" id="offcanvasResponsive" style="background: #D6CCC2" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title fw-900">m.</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="nav justify-content-end">
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <a class="nav-link" aria-current="page" href="#about">about</a>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <a class="nav-link" href="#design">design</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="#development">development</a>    
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="#projects">projects</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const location = useRoute();
</script>

<style lang="scss" scoped>

a, a:hover {
    color: inherit;
    text-decoration: none;
}

.nav-link, .navbar-brand, i {
    font-weight: 900;
    color: #7F5539;
}

</style>