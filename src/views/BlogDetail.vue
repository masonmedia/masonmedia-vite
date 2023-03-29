<template>
    <div class="container-fluid px-0">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="fs-1 fw-bold lh-1">{{ post.title }}</h1>
            </div>
        </div>

    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
// const routeDetail = route.params.title;

const post = ref([]);

// function formatUrl(string) {
//     let newUrl = string.replace(/\s+/g, '-').toLowerCase();
//     console.log(newUrl); // "sonic-free-games"
//     return newUrl;
// }

function formatUrl(string) {
    let newUrl = string.replace(/\W+/g, '-').toLowerCase(); //removes all non-word elements, replaces with dash
    console.log(newUrl); // "sonic-free-games"
    return newUrl;
}

async function getPost() {
    let newRoute = route.params.title;
    let formatRoute = formatUrl(newRoute);
    // let formatRoute = newRoute.replace(/\s+/g, '-').toLowerCase();
    // var str = "Sonic Free Games";
    // str = str.replace(/\s+/g, '-').toLowerCase();
    // console.log(str); // "sonic-free-games"

    let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewmasonmedia/' + formatRoute);
    let data = await response.json();
    post.value = data;
    console.log(post.value);
}

onMounted(() => {
    getPost();
})
</script>

<style lang="scss" scoped>

</style>