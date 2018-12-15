<template>
<div class="flex flex-col h-screen">
  <div class="w-8 h-8 border border-black hover:bg-black rounded-full flex flex-1 items-center justify-center fixed pin-t pin-r m-4">
    <a class="h-full w-full no-underline text-black hover:text-white text-xl items-center flex flex-1 items-center justify-center" href="https://github.com/arjunsinghy96/vue-javascript30.git">
      <i class="fab fa-github-alt"></i>
    </a>
  </div>
  <div class="flex flex-col h-48 items-center justify-center mx-4">
    <p class="text-4xl md:text-5xl underline">Vue JavaScript30</p>
    <p class="pt-3">This website contains the JavaScript30 examples but with Vue.js and a little personal touch.</p>
  </div>
  <div class="flex flex-1 items-center justify-center h-full bg-grey-lighter">
    <div class="flex flex-wrap justify-center">
      <router-link class="no-underline btn" to="/day1">01. Drum Kit</router-link>
      <router-link class="no-underline btn" to="/day2">02. Clock</router-link>
      <router-link class="no-underline btn" to="/day3">03. CSS Variables</router-link>
      <router-link class="no-underline btn" to="/day5">05. Flex Gallery</router-link>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style lang="postcss">
.btn {
  @apply py-2 bg-blue-dark px-3 mx-1 my-1 text-white font-semibold rounded-sm;
  transition: all 0.1s ease;
}

.btn:hover {
  @apply shadow-md;
}
</style>
