<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold logo">WebReinvent</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
                    <li><NuxtLink to="/posts" class="btn">Posts</NuxtLink></li> 
                </ul>
            </nav>
        </header>
        <div class="containe mx-auto p-4">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
color: black !important;
}
.router-link-exact-active {
    color: #f9dcc4
}
</style>