<template>
    <div class="flex flex-col pt-10 h-screen bg-grey-lightest px-5" @click='hideSuggestions'>
        <div class="input">
            <div>
                <span class="absolute pt-3 pl-4"><i class="text-lg text-blue fas fa-search"></i></span>
                <div id="searchbox" @click="focusSearch" v-show="showLabel && !input" class="label">Type here</div>
                <input ref="search" id="searchbox" @keyup="startSearch" @blur="blured" @focus.prevent="focused" class="input-box" v-model="input">
            </div>
            <div v-show="showSuggestions">
                <div class="autocomplete">
                    <div v-for="place in suggestions" :key="place.rank" @click="selectPlace(place)">
                        {{place.city}}, {{place.state}}
                        <span class="float-right p-0">{{place.population}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="place.rank" class="block p-3 text-left self-center my-5 shadow rounded bg-white max-w-xs w-2/3">
                <div class="text-md">{{place.city}}</div>
                <div>
                    <span class="align-bottom text-xl">{{place.state}}</span><span class="align-bottom text-sm float-right">{{place.population}}</span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "day6",
  data() {
    return {
      input: "",
      showLabel: true,
      showSuggestions: true,
      inputClass: {
        input: true,
        focused: true
      },
      cities: [],
      suggestions: [],
      place: {}
    };
  },
  methods: {
    startSearch() {
      if (this.input) {
        this.suggestions = this.cities.filter(place => {
          const regex = new RegExp(this.input, "gi");
          return place.city.match(regex) || place.state.match(regex);
        });
        this.suggestions = this.suggestions.slice(0, 10);
      } else {
        this.suggestions = [];
      }
    },
    focused() {
      this.showLabel = false;
      this.showSuggestions = true;
    },
    blured() {
      this.showLabel = true;
    },
    selectPlace(place) {
      this.place = place;
      this.input = "";
      this.showLabel = true;
      this.showSuggestions = false;
      this.suggestions = [];
    },
    hideSuggestions(e) {
      if (e.target.id !== "searchbox") {
        this.showSuggestions = false;
      }
    },
    focusSearch() {
      this.$refs.search.focus();
      this.showLabel = false;
      this.showSuggestions = true;
    }
  },
  mounted() {
    fetch(
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
    )
      .then(blob => blob.json())
      .then(data => {
        this.cities.push(...data);
        this.cities.forEach(place => {
          place.population = place.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return place;
        });
      });
  }
};
</script>

<style lang="postcss" scoped>
.input {
  @apply w-full max-w-lg mx-auto shadow bg-white;
  border-radius: 2rem;
}

.autocomplete > div:first-child {
  @apply bg-grey-lighter;
}

.autocomplete {
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
}

.autocomplete > div:last-child {
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
}

.autocomplete > div:hover {
  @apply bg-grey-light;
}

.autocomplete div {
  @apply py-3 px-10 text-left cursor-pointer;
}

.label {
  @apply absolute py-3 px-10 text-lg text-grey-darker;
}

.search-icon {
  @apply z-50 border-grey-light border cursor-pointer px-3;
  @apply text-blue inline-block absolute py-2 pin-r rounded-full bg-white;
}

.input-box {
  @apply text-grey-darkest bg-white w-full py-3 text-lg px-10 outline-none z-50;
  border-radius: 2rem;
}
</style>
