<template>
    <div>
        <PostCard :post="post" />
    </div>
</template>

<script setup>
// import { useRoute, useFetch } from '#imports'
definePageMeta({
    layout: 'detail'
})



const route = useRoute();
const id = route.params.id;
const uri = `https://dummyjson.com/posts/${id}`;

const { data: post } = await useFetch(uri);
</script>

<style scoped></style>
