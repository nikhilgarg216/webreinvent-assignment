<template>

  <Head>
    <Title>WebReinvent | Home</Title>
    <Meta name="description" content="Home page" />
  </Head>

  <div class="flex flex-col items-center justify-center p-6">
    <h1 class="text-4xl font-extrabold text-gray-800">WebReinvent Assignment</h1>

    <div class="flex space-x-4 pt-6">
      <button @click="openSeoReport(postsSeoLink)"
        class="px-4 py-3 text-md text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
        View Posts Page SEO Score
      </button>

      <button @click="openSeoReport(postDetailSeoLink)"
        class="px-4 py-3 text-md text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition">
        View Post Details Page SEO Score
      </button>
    </div>
  </div>
</template>

<script setup>
const postsSeoLink = "https://pagespeed.web.dev/analysis/https-webreinvent-assignment-vercel-app-posts/nzhc963sdj?form_factor=desktop";
const postDetailSeoLink = "https://pagespeed.web.dev/analysis/https-webreinvent-assignment-vercel-app-posts-1/c8e90fg4eh?form_factor=desktop";

const openSeoReport = (url) => {
  window.open(url, "_blank");
};
</script>

<style lang="scss" scoped></style>
