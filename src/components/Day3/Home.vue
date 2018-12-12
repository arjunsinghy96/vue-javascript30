<template>
    <div ref="root" class="root flex flex-col bg-blue-lightest h-screen">
        <div class="h-32 flex justify-center items-center">
            <h1 >Update CSS Variables with JS</h1>
        </div>
        <div class="h-64 flex justify-center items-center">
            <div class="flex flex-col px-5">
                <label for="sizing">Size</label>
                <input @touchmove="update" @mousemove="update" @change="update" type="range" name="sizing" min="50" max="100" value="100" data-suffix="%">
            </div>
            <div class="flex flex-col px-5">
                <label for="sizing">Blur</label>
                <input @touchmove="update" @mousemove="update" @change="update" type="range" name="blur" min="0" max="10" step="1" value="0" data-suffix="px">
            </div>
        </div>
        <div class="h-full mx-auto px-2 md:px-10 lg:px-20 max-w-xl">
            <img class="image shadow-lg rounded-lg" src="https://picsum.photos/800/500/?random">
        </div>
    </div>
</template>

<script>
export default {
  name: "day3",
  data() {
    return {};
  },
  methods: {
    update(e) {
      let suffix = e.target.dataset.suffix;
      this.$refs.root.style.setProperty(
        `--${e.target.name}`,
        `${e.target.value}${suffix}`
      );
    }
  },
  mounted() {
    this.$refs.root.style.setProperty(`--sizing`, `100%`);
    this.$refs.root.style.setProperty(`--blur`, `0px`);
  }
};
</script>

<style scoped>
.image {
  width: var(--sizing);
  filter: blur(var(--blur));
}
</style>
