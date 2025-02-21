<template>
    <div class="mx-auto p-3">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Latest Posts</h1>
        <div v-if="posts.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="post in posts" :key="post.id"
                class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <NuxtLink :to="`/posts/${post.id}`" class="block">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h2>
                    <p class="text-gray-700">{{ post.body.substring(0, 100) }}...</p>
                    <span class="text-blue-500 font-medium mt-2 inline-block">Read More →</span>
                </NuxtLink>
            </div>
        </div>

        <p v-else class="text-center text-gray-500 text-lg">Loading posts...</p>
    </div>
</template>

<script setup>
import { useFetch, useHead } from 'nuxt/app';

const { data } = await useFetch('https://dummyjson.com/posts');
const posts = data.value?.posts || [];

useHead({
    title: 'WebInvent - All Posts',
    meta: [
        { name: 'description', content: 'Read the latest blog posts ' }, 
        { property: 'og:title', content: 'Latest Blog Posts - WebInvent' }, 
        { property: 'og:type', content: 'website' }
    ]
});
</script>


<style scoped>
 
</style>

