<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const post = ref('');
const route = useRoute();

const base_url = "https://masonmedia.github.io/vue_routing_demo/posts/";
async function getPosts() {
    let response = await fetch(base_url + route.params.id);
    post.value = await response.json();
    console.log(post.value)
  }

onMounted(() => {
    getPosts();
})
</script>