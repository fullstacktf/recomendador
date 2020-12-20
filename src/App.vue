<template>
  <div id="app" class="flex bg-white-900 text-white min-h-screen">
    <Side />
    <div class="w-full">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Side from "@/components/side/Side";

export default {
  components: {
    Side
  }
};
</script>

<style src="./css/main.css"></style>
