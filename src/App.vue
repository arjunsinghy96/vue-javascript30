<template>
  <div id="app">
    <div v-if="nav" class="nav w-12 h-12 hover:shadow-outline shadow-lg rounded-full bg-blue-dark flex flex-1 items-center justify-center fixed pin-b pin-r m-4">
      <router-link class="no-underline text-black text-2xl font-bold" to="/">
        <i class="text-white fas fa-home"></i>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: true
    };
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  transition: all 0.2s ease;
}
</style>
