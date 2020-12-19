<template>
  <header class="bg-gray-800 bg-opacity-85 fixed h-20 inset-x-0 top-0">
    <div
      class="flex px-3 m-auto text-white text-sm flex-col md:flex-row max-w-8xl"
    >
      <div class="md:flex-auto md:flex-row-reverse flex-row flex px-1 py-5">
        <button
        type="user"
        class="w-30 h-8 flex justify-center border border-transparent text-xs font-bold rounded-full text-white"
        >
          <router-link to="/about" class="flex items-center mb-10">
            <div class="relative">
              <img src="../../assets/Keanu.png" class="rounded-full h-10 w-10 mt-1 ml-2 mr-3"/>
            </div>
          </router-link>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>