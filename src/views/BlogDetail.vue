<template>
    <div class="container-fluid mt-5 px-0">
        <div class="row min-vh-75 pt-5">
            <div class="col-lg-12">
                <h1>{{ post.title }}</h1>
                <p>{{ route.params }}</p>
            </div>
            <!-- <div class="col-lg-12">
                <img class="w-100" :src="post.thumbnail" alt="">
            </div> -->
            <div class="col-lg-12" v-html="post.content" id="post_content">
            </div>
            <!-- <div class="col-lg-8 d-flex flex-column justify-content-center align-items start p-5">
                <h1 class="display-4 lh-1 fw-bold" style="letter-spacing: -3px;">{{ post.title.rendered }}</h1>
            </div>
            </div>
            <div class="row p-0">
            <div class="col-lg-12 p-0">

                <img
                :src="post.jetpack_featured_media_url"
                alt=""
                class="w-100"
                />
                <div v-html="post.content.rendered.slice(0, 4000)"></div>
            </div> -->
        </div>

    </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { useRoute } from "vue-router";
import postData from '../data/posts.json';

const route = useRoute();

// const posts = ref([]);

// local data
// const postId = route.params.title;
// const post = computed(() => {
//   return postData.items.find(post => post.title === postId)
// })

// using filter
const post = computed(() => {
    return postData.items.filter(post => post.title === route.params.title)[0];
    // return postData.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
})


// const routeDetail = route.params.title;

//*using an array populates the API data in another array, which needs to be iterated
// const post = ref([]);
//*using an empty string OR empty object {} populates the API data in a string, which doesn't needs to be iterated

// const post = ref({});

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
    // let formatRoute = formatUrl(newRoute);
    // let formatRoute = newRoute.replace(/\s+/g, '-').toLowerCase();
    // var str = "Sonic Free Games";
    // str = str.replace(/\s+/g, '-').toLowerCase();
    // console.log(str); // "sonic-free-games"

    let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewmasonmedia/' + newRoute);
    post.value = await response.json();
    console.log(post.value);
}

// const base_url = "https://techcrunch.com/wp-json/wp/v2/posts/";
const base_url = "https://masonmedia.github.io/vue_routing_demo/posts/";
async function getNews() {
    let response = await fetch(base_url + route.params.id);
    post.value = await response.json();
    console.log(post.value)
  }

onMounted(() => {
    getPost();
    // getNews();
})
</script>

<style lang="scss" scoped>
#post_content h4 {
    font-size: 50px;
    color: red;
}
</style>