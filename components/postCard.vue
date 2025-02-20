<template>
    <div class="card text-center">
        
        <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <p class="text-xl font-semibold">{{ post.title }}</p>
            <div class="mt-4 border-t pt-4">
                <p class="text-gray-700">{{ post.body }}</p>
                <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span>Views: {{ post.views }}</span>
                    <span>Likes: {{ post.reactions.likes }} | Dislikes: {{ post.reactions.dislikes }}</span>
                </div>
                <div class="mt-2">
                    <span v-for="tag in post.tags" :key="tag"
                        class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">#{{ tag
                        }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>

<style lang="scss" scoped></style>