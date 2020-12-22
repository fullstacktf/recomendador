<template>
  <div class="container mx-auto fixed inset-x-0 top-40">
    <div class="my-24">
      <Header />
      <Categories />
      <div class="recommended px-6 mb-12">
        <vue-glide
          :perView="5"
          :gap="20"
          :peek="{ before: 0, after: 70 }"
          :breakpoints="{
            1024: {
              perView: 3
            },
            800: {
              perView: 2
            },
            576: {
              perView: 1,
              peek: {
                before: 0,
                after: 0
              }
            }
          }"
        >
          <vue-glide-slide>
            <router-link to="/aboutts"
              ><img src="@/assets/toy-story-bg.jpg" alt="Toy Story"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/aboutdm">
              <img
                src="@/assets/Dangerous-minds-bg.jpg"
                alt="Dangerous Minds"
              />
            </router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/aboutmk"
              ><img src="@/assets/mortal-kombat-bg.jpg" alt="Mortal Kombat"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/aboutPH"
              ><img src="@/assets/pocahontas-bg.jpg" alt="Pocahontas"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/aboutSV"
              ><img src="@/assets/se7en-bg.jpg" alt="Se7ven"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/aboutJM"
              ><img src="@/assets/jumanji-bg.jpg" alt="Jumanji"
            /></router-link>
          </vue-glide-slide>
          <template slot="control">
            <button
              data-glide-dir="<"
              class="absolute w-8 h-8 rounded-full bg-gray-500"
              style="top:calc(50% - 16px); left: 10px"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style="margin-left: 6px"
              >
                <path
                  d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"
                ></path>
              </svg>
            </button>
            <button
              data-glide-dir=">"
              class="absolute w-8 h-8 rounded-full bg-gray-500"
              style="top:calc(50% - 16px); right: 10px"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style="margin-left: 6px"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                ></path>
              </svg>
            </button>
          </template>
        </vue-glide>
      </div>
      <div class="container mx-auto px-32">
        <div class="text-center">
          <p class="mt-8 text-2xl text-gray-800 font-bold mb-2">
            POPULAR RECOMMENDATIONS
          </p>
        </div>
      </div>

      <vue-glide
        :perView="5"
        :gap="20"
        :peek="{ before: 0, after: 70 }"
        :breakpoints="{
          1024: {
            perView: 3
          },
          800: {
            perView: 2
          },
          576: {
            perView: 1,
            peek: {
              before: 0,
              after: 0
            }
          }
        }"
      >
        <vue-glide-slide>
          <router-link to="/about"
            ><img src="@/assets/the_sound_of_music.jpg" alt="The Sound of Music"
          /></router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about"
            ><img
              src="@/assets/avengers_infinity_war.jpg"
              alt="Avengers Infinity War"
          /></router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about"
            ><img src="@/assets/lord-of-the-rings.jpg" alt="Lord of the rings"
          /></router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about"
            ><img src="@/assets/narnia.jpg" alt="Narnia"
          /></router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about"
            ><img
              src="@/assets/remember_the_titans.jpg"
              alt="Remmember the titans"
          /></router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about"
            ><img
              src="@/assets/high_school_musical.jpg"
              alt="High School Musical"
          /></router-link>
        </vue-glide-slide>
        <template slot="control">
          <button
            data-glide-dir="<"
            class="absolute w-8 h-8 rounded-full bg-gray-500"
            style="top:calc(50% - 16px); left: 10px"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              style="margin-left: 6px"
            >
              <path
                d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"
              ></path>
            </svg>
          </button>
          <button
            data-glide-dir=">"
            class="absolute w-8 h-8 rounded-full bg-gray-500"
            style="top:calc(50% - 16px); right: 10px"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              style="margin-left: 6px"
            >
              <path
                d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
              ></path>
            </svg>
          </button>
        </template>
      </vue-glide>
    </div>
    <Footer />
  </div>
</template>

<script>
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default {
  name: "index",
  components: {
    Categories,
    Header,
    Footer
  }
};
</script>
