<template>
    <div class="w-100">
        <button class="btn btn-primary d-lg-none d-flex ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">menu</button>
        <!-- nav -->
        <nav class="navbar p-3 fixed-top d-none d-lg-block w-100" style="background: #D6CCC2">
        <!-- <nav class="navbar p-3 fixed-top d-none d-lg-block w-100" :class="location.path === '/' ? 'border-bottom border-secondary' : 'bg-light border-bottom'" :style="location.path === '/' ? 'background: #D6CCC2' : ''"> -->
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">m.</router-link>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" aria-current="page" to="/about">about</router-link> -->
                        <a class="nav-link" aria-current="page" href="#about">about</a>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" aria-current="page" to="/design">design</router-link> -->
                        <a class="nav-link" href="#design">design</a>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" aria-current="page" to="/development">development</router-link> -->
                         <a class="nav-link" href="#development">development</a>    
                    </li>
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" aria-current="page" to="/">projects</router-link> -->
                         <a class="nav-link" href="#projects">projects</a>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" aria-current="page" to="/">contact</router-link> -->
                         <a class="nav-link" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasResponsive">Offcanvas right</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                ...
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

.nav-link, .navbar-brand {
    font-weight: 900;
    color: #7F5539;
}

</style>