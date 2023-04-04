<script setup>
import { ref, computed, onMounted } from 'vue'
import postData from '../data/posts.json'

// const posts = ref([]);

// medium articles
// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewmasonmedia
// https://rss2json.com/#rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss
// https://javascript.plainenglish.io/my-gift-to-medium-writers-an-open-source-website-for-showcasing-your-articles-a788e2900773

function formatUrl(string) {
    let newUrl = string.replace(/\W+/g, '-').toLowerCase(); //removes all non-word elements, replaces with dash
    // let newUrl = string.replace(/[.,\s]/g, '-').toLowerCase(); //removes period, commas, spaces, replaces with dash
    // let newUrl = string.replace(/\s+/g, '-').toLowerCase();
    console.log(newUrl); // "sonic-free-games"
    return newUrl;
}

// const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewmasonmedia"
// function getPosts() {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         posts.value = data;
//     })
//     console.log(posts.value)
// }

// const base_url = "https://techcrunch.com/wp-json/wp/v2/posts/";
// const newsList = ref([]);
// async function getNews() {
//     let response = await fetch(base_url);
//     newsList.value = await response.json();
//     console.log(newsList.value)
//   }

  const base_url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andrewmasonmedia";
async function getPosts() {
    let response = await fetch(base_url);
    posts.value = await response.json();
    console.log(posts.value)
  }

onMounted(() => {
    // getPosts();
    // getNews();
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
            <!-- <div class="col-lg-4 p-0" v-for="(post, index) in newsList" :key="post.id"> -->
            <div class="col-lg-4 p-0" v-for="(post, index) in postData.items" :key="index">
                <div class="m-2 p-4 bg-dark text-light rounded-5 shadow">
                    <!-- <img
                    :src="post.jetpack_featured_media_url"
                    alt=""
                    class="img-fluid"
                    />
                    <p>{{ post.date }}</p>
                    <router-link :to="'/blog/' + post.id">
                        <button class="btn btn-outline-light">
                            more
                        </button>
                    </router-link> -->

                <img class="w-100 rounded-5 shadow mb-3" :src="post.thumbnail" alt="">
                <h5 class="text-secondary">{{ post.pubDate.substr(0,10) }}</h5>
                <span class="badge text-bg-secondary me-2 my-2" v-for="(item, index) in post.categories">{{ item }}</span>
                <h2 class="fs-4 my-2" style="font-weight: 500; letter-spacing: -1px;">{{ post.title }}</h2>
                <p v-html="post.content.slice(0, 200)"></p>

                    <!-- Button trigger modal -->
                    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#item_' + formatUrl(post.title)">
                    More
                    </button> -->
                <a :href="post.link" target="_blank">
                <button class="btn btn-outline-light px-4 rounded-5">More</button>
                </a>

                <!-- <router-link :to="'/blog/' + post.pubDate">
                    <button class="btn btn-primary px-4">More</button>
                </router-link> -->
                
                <!-- works for local JSON with computed -->
                <!-- <router-link :to="'/blog/' + post.id">
                    <button class="btn btn-primary px-4">More</button>
                </router-link> -->
                <!-- <router-link :to="'/blog/' + post.title">
                    <button class="btn btn-primary px-4">More</button>
                </router-link> -->
            </div>  



            <!-- modal display -->

<!-- Modal -->
<!-- <div class="modal fade" :id="'item_' + formatUrl(post.title)" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="container-fluid d-flex flex-column justify-content-center align-items-center modal-body"
      >
        <div class="row min-vh-100">
            <div class="col-sm-12 p-5">
                <h1 class="fw-bold mb-3">{{ post.title }}</h1>
                <div class="" v-html="post.content"></div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> -->
            </div>
        </div>

    </div>
</template>

<style scoped>
</style>