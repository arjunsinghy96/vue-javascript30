<template>
    <div class="background bg-cover flex flex-1 items-center justify-center h-screen">
        <div @transitionend="remove_playing" @click="play_audio(key)" :ref="key" v-for="key in keys" :key="key" class="cursor-pointer key w-24 py-5 border-yellow border-2 rounded mx-2">
            <div class="z-10 inline self-center text-white text-3xl font-extrabold">{{key}}</div>
            <div><small class="text-yellow uppercase font-bold">{{names[key]}}</small></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Day1Home",
  data() {
    return {
      audios: {
        A: new Audio(require("@/assets/audio/clap.wav")),
        S: new Audio(require("@/assets/audio/hihat.wav")),
        D: new Audio(require("@/assets/audio/kick.wav")),
        F: new Audio(require("@/assets/audio/openhat.wav")),
        G: new Audio(require("@/assets/audio/boom.wav")),
        H: new Audio(require("@/assets/audio/ride.wav")),
        J: new Audio(require("@/assets/audio/snare.wav")),
        K: new Audio(require("@/assets/audio/tom.wav")),
        L: new Audio(require("@/assets/audio/tink.wav"))
      },
      keys: "ASDFGHJKL",
      names: {
        A: "clap",
        S: "HIHAT",
        D: "KICK",
        F: "OPENHAT",
        G: "BOOM",
        H: "RIDE",
        J: "SNARE",
        K: "TOM",
        L: "TINK"
      }
    };
  },
  methods: {
    play(e) {
      this.play_audio(e.key.toUpperCase());
    },
    play_audio(key) {
      var audio = this.audios[key];
      var el = this.$refs[key];
      if (el) {
        el[0].classList.add("playing");
      }
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    },
    remove_playing(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }
  },
  mounted() {
    window.addEventListener("keydown", this.play);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.play);
  }
};
</script>

<style scoped>
.background {
  background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
}
.key {
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.07s ease;
}

.playing {
  transform: scale(0.9);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
</style>
