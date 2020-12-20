<template>
  <div class="flex flex-wrap items-center justify-between p-8 fixed top-16">
    <div class="md:flex-auto flex-row">
      <ul class="table w-full">
        <li class="md:table-cell py-1">
          <a href="/#" class=" ">
            <button
              type="item1"
              class="w-60 flex justify-center border border-transparent text-xs font-bold rounded-full py-2 px-4 text-white bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ITEM 1
            </button>
          </a>
        </li>
        <li class="md:table-cell py-1">
          <a href="/#" class=" ">
            <button
              type="item2"
              class="w-60 flex justify-center border border-transparent text-xs font-bold rounded-full py-2 px-4 text-white bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ITEM 2
            </button>
          </a>
        </li>
        <li class="md:table-cell py-1">
          <a href="/#" class=" ">
            <button
              type="item3"
              class="w-60 flex justify-center border border-transparent text-xs font-bold rounded-full py-2 px-4 text-white bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ITEM 3
            </button>
          </a>
        </li>
        <li class="md:table-cell py-1">
          <a href="/#" class=" ">
            <button
              type="item4"
              class="w-60 flex justify-center border border-transparent text-xs font-bold rounded-full py-2 px-4 text-white bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ITEM 4
            </button>
          </a>
        </li>
        <li class="md:table-cell py-1">
          <a href="/#" class=" ">
            <button
              type="item5"
              class="w-60 flex justify-center border border-transparent text-xs font-bold rounded-full py-2 px-4 text-white bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ITEM 5
            </button>
          </a>
        </li>
      </ul>
    </div>
    <div class="container mx-full px-24">
      <div class="mt-4 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="text-center py-2 pr-28">
          <p class="mt-8 ml-16 text-5xl text-gray-800 font-bold mb-2">
            YOUR RECOMMENDATIONS
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categories",
  data() {
    return {};
  }
};
</script>
