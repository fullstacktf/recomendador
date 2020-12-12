<template>
  <div id="app" class="flex bg-gray-900 text-white min-h-screen">
    <Slide />

    <div class="w-full">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Slide from "@/components/slide/Slide";

export default {
  components: {
    Slide
  }
};
</script>

<style src="./css/main.css"></style>
