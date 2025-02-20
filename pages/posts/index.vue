<template>
    <div class="container">
        <h1 class="text-3xl font-bold mb-4">Latest Posts</h1>
        <div v-if="posts.length">
            <div v-for="post in posts" :key="post.id" class="post-card">
                <NuxtLink :to="`/posts/${post.id}`">
                    <h2 class="text-xl font-semibold">{{ post.title }}</h2>
                    <p class="text-gray-700">{{ post.body.substring(0, 100) }}...</p>
                </NuxtLink>
            </div>
        </div>
        <p v-else>Loading posts...</p>
    </div>
</template>

<script setup>
import { useFetch } from 'nuxt/app';
// import { useHead } from 'nuxt/app';

const { data } = await useFetch('https://dummyjson.com/posts');
const posts = data.value?.posts || [];


// useHead({
//   title: 'Latest Blog Posts - Nuxt SEO',
//   meta: [
//     { name: 'description', content: 'Read the latest blog posts about web development, technology, and more.' },
//     { name: 'keywords', content: 'Nuxt, SEO, blog, posts, web development' },
//     { property: 'og:title', content: 'Latest Blog Posts - Nuxt SEO' },
//     { property: 'og:description', content: 'Read the latest blog posts about web development, technology, and more.' },
//     { property: 'og:type', content: 'website' }
//   ]
// });
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}

.post-card {
    background: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}

.post-card:hover {
    transform: scale(1.01);
    background-color: #a8dadc;
}

h2 {
    margin-bottom: 5px;
}
</style>
