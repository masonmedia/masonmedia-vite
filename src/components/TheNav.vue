<template>
    <div class="w-100">
        <div class="container-fluid px-0 pt-0 text-secondary w-100 d-lg-none d-flex position-relative z-1">
            <!-- <div class="w-100 d-lg-none d-flex fixed-top bg-dark"> -->
                <!-- brand -->
                <router-link class="navbar-brand p-3 fw-900 font-antonio text-uppercase fs-5" to="/">M /</router-link>
                <!-- menu -->
                <button class="btn ms-auto my-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                    <i class="fs-2 bi bi-justify"></i>
                </button>
            <!-- </div> -->
        </div>
        <!-- nav -->
        <nav class="navbar p-3 fixed-top d-none d-lg-block bg-white w-100 border-bottom">
        <!-- <nav class="navbar p-3 fixed-top d-none d-lg-block w-100" style="background: #D6CCC2"> -->
        <!-- <nav class="navbar p-3 fixed-top d-none d-lg-block w-100" :class="location.path === '/' ? 'border-bottom border-secondary' : 'bg-light border-bottom'" :style="location.path === '/' ? 'background: #D6CCC2' : ''"> -->
            <div class="container-fluid">
                <router-link class="navbar-brand font-antonio text-uppercase fs-4" style="color: #7F5539" to="/">M /</router-link>
                <ul class="nav justify-content-end font-antonio text-uppercase fs-4">
                    <router-link class="nav-link" v-for="(route, index) in router.options.routes" :key="index"
                    :to="route.path">
                        {{ route.name }} //
                    </router-link>
                    <a class="nav-link" href="mailto:bassfx@duck.com">Contact //</a>
                </ul>
            </div>   
        </nav>

        <div class="offcanvas offcanvas-end border-bottom w-100 font-antonio" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title font-antonio text-uppercase fw-900" style="color: #7F5539">M /</h5>
                <!-- <button type="button" class="btn-close text-primary" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
                <button class="btn pt-0 pe-0" role="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i class="bi bi-x-lg fs-4"></i>
                </button>
            </div>
            <div class="offcanvas-body d-flex flex-column align-items-start justify-content-end py-5">
                <ul class="nav">
                    <li class="nav-item fw-bold text-uppercase"
                    data-bs-dismiss="offcanvas">
                        <router-link class="nav-link" v-for="(route, index) in router.options.routes.slice(0,5)" :key="index"
                        :to="route.path">
                            {{ route.name }} //
                        </router-link>
                        <a class="nav-link" href="mailto:bassfx@duck.com">Contact //</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const location = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped>

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: rgb(221, 184, 146);
}

.nav-link, 
.navbar-brand, 
i, 
.nav-link:focus {
    font-weight: 900;
    color: #7F5539;
}

.offcanvas-body .nav-link {
    font-size: 8vmin;
    line-height: 8vmin;
}

.btn-close, .offcanvas-header .btn-close {
    color: #7F5539 !important;
}

nav a.router-link-exact-active {
  color: grey;
}

nav a.router-link-exact-active:hover {
  color: lightgrey;
}

</style>