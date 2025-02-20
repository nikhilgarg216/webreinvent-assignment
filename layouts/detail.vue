<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/posts" class="font-bold">All Post</NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

    </div>
</template>


<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>