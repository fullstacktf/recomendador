+<template>
  <div
    class="min-h-screen bg-cover"
    :style="{ backgroundImage: `url('${background}')` }"
  >
    <div class="pt-32 pl-8 mb-2">
      <img src="@/assets/toy-story-logo.png" alt="logo" class="w-96" />
    </div>

    <div class="pl-16 mb-4">
      <button
        class="px-6 py-2 bg-white text-black font-bold uppercase rounded flex items-center hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
        <span class="pl-1">Trailer</span>
      </button>
    </div>
    <div class="pl-16 text-gray-500 mb-8">
      <p class="text-white font-blond" v-if="items">Duration: {{ items.runtime }} min</p>
      <br>
      <p class="text-white font-blond" v-for="item in items.tags" :key="item.id">
        {{ item.name }}
      </p>
    </div>
    <div id="app" class="w-96 xl:w-1/3 pl-16 leading-loose">
      <p class="text-white font-blond" v-if="items">
        {{ items.overview }}
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "AboutTS",
  data() {
    return {
      background: require("@/assets/toy-story-bg.jpg"),
      items: undefined
    };
  },
  mounted() {
    Vue.axios.get("https://api.urecommend.me/media/862").then(response => {
      this.items = response.data.result;
    });
  }
};
</script>
