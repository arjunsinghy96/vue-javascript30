<template>
    <div class="flex flex-1 items-center justify-center h-screen bg-grey-darkest">
        <div class="clock">
            <div class="clock-face w-full relative h-full">
                <div class="hand hand-sec" :style="{transform: secondStyle}"></div>
                <div class="hand hand-min" :style="{transform: minStyle}"></div>
                <div class="hand hand-hr" :style="{transform: hourStyle}"></div>
                <div class="clock-center"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Day1Home",
  data() {
    return {
      secondDeg: 90,
      minDeg: 90,
      hourDeg: 90,
      secondStyle: "",
      minStyle: "",
      hourStyle: ""
    };
  },
  methods: {
    updateDate() {
      this.secondDeg = this.secondDeg + 6;
      this.secondStyle = `rotate(${this.secondDeg}deg)`;
      if ((this.secondDeg - 90) % 360 === 0) {
        this.minDeg = this.minDeg + 6;
        this.minStyle = `rotate(${this.minDeg}deg)`;
        this.hourDeg = this.hourDeg + 0.5;
        this.hourStyle = `rotate(${this.hourDeg}deg)`;
      }
    },
    setInitial() {
      const now = new Date();
      this.secondDeg = now.getSeconds() * 6 + 90;
      this.secondStyle = `rotate(${this.secondDeg}deg)`;
      this.minDeg = now.getMinutes() * 6 + 90;
      this.minStyle = `rotate(${this.minDeg}deg)`;
      this.hourDeg = (now.getHours() / 12) * 360 + now.getMinutes() / 2 + 90;
      this.hourStyle = `rotate(${this.hourDeg}deg)`;
    }
  },
  beforeMount() {
    this.setInitial();
  },
  created() {
    setInterval(this.updateDate, 1000);
  }
};
</script>

<style lang="postcss" scoped>
.clock {
  @apply rounded-full border-white w-64 h-64 p-2;
  border-width: 20px;
}

.hand {
  @apply bg-red-light absolute rounded-full;
  transform-origin: 100%;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.11, 2.88);
}

.hand-sec {
  height: 2px;
  width: 50%;
  top: 50%;
}

.hand-min {
  height: 5px;
  width: 45%;
  top: 50%;
  left: 5%;
}

.hand-hr {
  height: 7px;
  width: 35%;
  top: 50%;
  left: 15%;
}

.clock-center {
  @apply absolute rounded-full bg-white h-4 w-4;
  left: 47%;
  top: 47%;
}
</style>
