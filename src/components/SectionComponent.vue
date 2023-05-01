<template>
    <div class="row p-0 min-vh-100 m-3 rounded-5 shadow" :class="class1">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-stretch min-vh-75 p-5 left-center order-2 order-lg-1">
            <h5 class="mb-3">{{ microTitle }}</h5>
            <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">{{ title }}</h1>
            <p class="fs-5 mt-3 mb-0 col-md-11">{{ text }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down mt-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        <div class="col-lg-6 p-4 order-1 order-lg-2" :class="class2">
            <slot></slot>
            <!-- <TransitionGroup name="fade" mode="out-in">
              <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 img-full"></div>
              <img :key="2" class="w-100 rounded-5" @load="loadImage" v-show="isLoaded" :src="getImageUrl('horizon','svg')" alt="">
            </TransitionGroup> -->
        </div>
      </div>
</template>

<script setup>

defineProps({
  microTitle: String,
  title: String,
  text: String,
  btnText: String,
  class1: String,
  class2: String
})

</script>

<style lang="scss" scoped>

</style>