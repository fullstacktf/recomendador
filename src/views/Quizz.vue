<template>
  <div class="py-20 text-black">
    <Header />
    <CategoriesQuizz />
    <div class="rounded-t-xl overflow-hidden">
      <div
        class="flex pb-5 px-3 m-auto pt-36 text-white text-sm flex-col md:flex-row max-w-6xl"
      >
        <div class="md:flex-auto md:flex-wrap mr-2 flex-row flex px-1 py-2">
          <ul class="table w-full">
            <li class="block sm:table-cell p-6">
              <div class="mt-1 relative">
                <select
                  class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                  name=""
                  id=""
                >
                  <option value="16">Animation</option>
                  <option value="35">Comedy</option>
                  <option value="10751">Family</option>
                  <option value="37">Western</option>
                </select>
                <div
                  class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-green-300 rounded-r pointer-events-auto"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </li>
            <li class="block sm:table-cell p-6 py-16">
              <div class="max-w-sm">
                <div class="mt-1 relative">
                  <select
                    class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                    name=""
                    id=""
                  >
                    <option value="14">Fantasy</option>
                    <option value="9648">Mystery</option>
                    <option value="10769">Foreign</option>
                    <option value="99">Documentary</option>
                  </select>
                  <div
                    class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-green-300 rounded-r pointer-events-auto"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li class="block sm:table-cell p-6">
              <div class="max-w-sm">
                <div class="mt-1 relative">
                  <select
                    class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                    name=""
                    id=""
                  >
                    <option value="12">Adventure</option>
                    <option value="27">Horror</option>
                    <option value="80">Crime</option>
                    <option value="10770">TV Movie</option>
                  </select>
                  <div
                    class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-green-300 rounded-r pointer-events-auto"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li class="block sm:table-cell p-6">
              <div class="max-w-sm">
                <div class="mt-1 relative">
                  <select
                    class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                    name=""
                    id=""
                  >
                    <option value="10749">Romance</option>
                    <option value="18">Drama</option>
                    <option value="36">History</option>
                    <option value="10402">Music</option>
                  </select>
                  <div
                    class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-green-300 rounded-r pointer-events-auto"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li class="block sm:table-cell">
              <div class="max-w-sm">
                <div class="mt-1 relative">
                  <select
                    class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                    name=""
                    id=""
                  >
                    <option
                      v-for="(option, index) in options"
                      :key="index"
                      :value="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                  <div
                    class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-green-300 rounded-r pointer-events-auto"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="min-w-0 flex-1 p-12 flex items-center justify-center">
        <router-link to="/index"
          ><button
            type="button"
            class=" py-3 w-48 rounded-md font-semibold hover:bg-green-500 bg-green-800 text-white focus:outline-black"
          >
            CONTINUE
          </button></router-link
        >
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import CategoriesQuizz from "../components/categories/CategoriesQuizz";
import Footer from "../components/footer/Footer";

export default {
  name: "Quizz",
  components: {
    Header,
    CategoriesQuizz,
    Footer
  },
  data() {
    return {
      options: [
        { text: "Action", value: 28 },
        { text: "Science Fiction", value: 878 },
        { text: "War", value: 10752 },
        { text: "Thriller", value: 53 }
      ]
    };
  }
};
</script>
