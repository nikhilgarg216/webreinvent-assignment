<template>
    <div>
        <Head>
            <Title>WebReinvent | {{ post.title }}</Title>
            <Meta name="description" :content="post.body"> </Meta>
        </Head>
        <PostCard :post="post" />
    </div>
</template>

<script setup>
import { Head } from '#components';


definePageMeta({
    layout: 'detail'
})



const route = useRoute();
const id = route.params.id;
const uri = `https://dummyjson.com/posts/${id}`;

const { data: post } = await useFetch(uri);
</script>

<style scoped></style>
