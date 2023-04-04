<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([]);

const base_url = "https://masonmedia.github.io/vue_routing_demo/posts/posts.json";
async function getPosts() {
    let response = await fetch(base_url);
    posts.value = await response.json();
    console.log(posts.value)
  }

onMounted(() => {
    getPosts();
})

</script>

<template>
    <div class="container-fluid px-0 mt-0 mt-md-5">
        <div class="row pt-4">
            <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
                <h5>mason media</h5>
                <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">Thoughts on frontend development, code, Vuejs, Javascript, learning and more.</h1>
                <p class="fs-4 text-secondary mt-3 mb-0">A tech focused blog with a focus on Vuejs, javascript, frontend development, interviewing, jobs and more.</p>
            </div>
            </div>
            <div class="row px-4 pb-4">
            <div class="col-lg-4 p-0" v-for="(post, index) in posts" :key="index">
                <div class="m-2 p-4 bg-dark text-light rounded-5 shadow">

                <!-- <img class="w-100 rounded-5 shadow mb-3" :src="post.thumbnail" alt=""> -->
                <!-- <span class="badge text-bg-secondary me-2 my-2" v-for="(item, index) in post.categories">{{ item }}</span> -->
                <h2 class="fs-4 my-2" style="font-weight: 500; letter-spacing: -1px;">{{ post.title }}</h2>
                <p v-html="post.body"></p>
                
                <!-- works for local JSON with computed -->
                <!-- <router-link :to="'/blog/' + post.id">
                    <button class="btn btn-primary px-4">More</button>
                </router-link> -->
                <router-link :to="'/gitposts/' + post.id">
                    <button class="btn btn-primary px-4">More</button>
                </router-link>
            </div>  
            </div>
        </div>

    </div>
</template>

<style scoped>
</style>