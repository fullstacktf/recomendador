<template>
  <div class="min-h-screen bg-cover bg-white-900">
    <Side />
    <div class="pt-32 pl-8 mb-2">
      <img src="@/assets/Blogo.png" alt="logo" class="ml-14 mb-10 w-48" />
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
      PG &middot; Date &middot; Original language &middot; Categories
    </div>

    <div class="w-96 xl:w-1/3 pl-16 leading-loose text-black">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugit
      tenetur velit quasi soluta sunt suscipit, eveniet dolorum. Tenetur
      architecto voluptatum quis, vitae autem, vero tempora libero impedit culpa
      debitis, quisquam nam nemo quidem modi sunt illo consequuntur maiores
      magni.
    </div>
  </div>
</template>

<script>
import Side from "@/components/side/Side";

export default {
  data() {
    return {};
  },
  components: {
    Side
  }
};
</script>
