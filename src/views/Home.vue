<template>
  <div class="flex flex-1 items-center justify-center h-screen bg-grey-lighter">
    <div class="flex flex-wrap justify-center">
      <router-link class="no-underline btn" to="/day1">01. Drum Kit</router-link>
      <router-link class="no-underline btn" to="/day2">02. Clock</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
  }
};
</script>

<style lang="postcss">
.btn{
  @apply py-2 bg-blue-dark px-3 mx-1 my-1 text-white font-semibold rounded-sm;
  transition: all 0.1s ease;
}

.btn:hover{
  @apply shadow-md
}
</style>

