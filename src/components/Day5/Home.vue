<template>
    <div class="flex flex-row h-screen">
        <div @mouseenter="noBlur('cl1')" @mouseleave="Blur('cl1')" @click="toggleActive('cl1')" :class="cl1">
        </div>
        <div @mouseenter="noBlur('cl2')" @mouseleave="Blur('cl2')" @click="toggleActive('cl2')" :class="cl2">
        </div>
        <div @mouseenter="noBlur('cl3')" @mouseleave="Blur('cl3')" @click="toggleActive('cl3')" :class="cl3">
        </div>
        <div @mouseenter="noBlur('cl4')" @mouseleave="Blur('cl4')" @click="toggleActive('cl4')" :class="cl4">
        </div>
    </div>
</template>

<script>
export default {
  name: "day5",
  data() {
    return {
      cl1: {
        panel: true,
        panel1: true,
        active: false,
        no_blur: false
      },
      cl2: {
        panel: true,
        panel2: true,
        active: false,
        no_blur: false
      },
      cl3: {
        panel: true,
        panel3: true,
        active: false,
        no_blur: false
      },
      cl4: {
        panel: true,
        panel4: true,
        active: false,
        no_blur: false
      }
    };
  },
  methods: {
    toggleActive(e) {
      ["cl1", "cl2", "cl3", "cl4"].forEach(cl => {
        if (cl === e) {
          this[cl].active = !this[cl].active;
        } else {
          this[cl].active = false;
        }
      });
    },
    Blur(e) {
      this[e].no_blur = false;
    },
    noBlur(e) {
      this[e].no_blur = true;
    }
  }
};
</script>

<style lang="postcss" scoped>
.panel {
  @apply flex-1 bg-cover bg-center bg-no-repeat flex flex-col;
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.5s ease, background 0.2s, filter 0.1s;
  filter: blur(2px);
}

.panel1 {
  background: url(https://picsum.photos/1920/1080/?image=1043);
}

.panel2 {
  background: url(https://picsum.photos/1920/1080/?image=1044);
}

.panel3 {
  background: url(https://picsum.photos/1920/1080/?image=1045);
}

.panel4 {
  background: url(https://picsum.photos/1920/1080/?image=1040);
}

.active {
  flex: 15;
  filter: blur(0px);
}

.no_blur {
  filter: blur(0px);
}
</style>
