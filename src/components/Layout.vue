<template>
    <div>
        <Nav />
            <slot></slot>
        <Footer />
    </div>
</template>

<script setup>
import Nav from '../components/TheNav.vue';
import Footer from '../components/TheFooter.vue'
</script>
