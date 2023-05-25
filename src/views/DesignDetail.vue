<template>
    <div class="container mt-5 px-0">
    <div class="row pt-5">
      <div class="col-lg-8 offset-lg-2 center-center p-5">
         <!-- <h1 class="display-1 fw-900 lh-1 ls-1">{{ post.title }}</h1> -->
        <p>{{ post.title }}</p>
        </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from "vue-router"
import posts from '../data/dummy.json'

const route = useRoute();

// const postId = parseInt(route.params.id)

const post = computed(() => {
  return posts.find(post => post.id == route.params.id)
})
</script>