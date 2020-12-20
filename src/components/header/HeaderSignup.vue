<template>
  <header class="bg-gray-800 bg-opacity-85 fixed inset-x-0 top-0">
    <div
      class="flex pb-5 px-3 m-auto pt-5 text-white text-sm flex-col md:flex-row max-w-8xl"
    >
      <div class="md:flex-auto md:flex-wrap mr-2 flex-row flex px-1">
         <img
        href="#"
        alt="URlogo"
        class="h-15 w-20"
        src="../../assets/logoG.png"
        />
      </div>
      <router-link to="/login">
      <div class="md:flex-auto md:flex-row-reverse flex-row flex px-1 py-1">
        <button
        type="submit"
        class="w-40 h-10 flex justify-center border border-transparent text-base font-bold rounded-full py-2 px-4 text-white bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        LOGIN
      </button>
      </div>
      </router-link>
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