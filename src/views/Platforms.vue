<template>
  <div class="container mx-auto fixed inset-x-0 top-40">
    <div class="my-8">
      <Header />
      <Side />
      <CategoriesPlatforms />
      <div class="recommended px-6 py-14 mb-12">
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
            <router-link to="/platforms"
              ><img src="@/assets/star_wars_a_new_hope.jpg" alt="star wars"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about">
              <img src="@/assets/snow_white.jpg" alt="snow white" />
            </router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/black_panther.jpg" alt="black panther"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/zootopia.jpg" alt="zootopia"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/aboutCM"
              ><img
                src="@/assets/captain_marvel_background.jpg"
                alt="captain marvel"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/one_strange_rock.jpg" alt="one strange rock"
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
      <!-- end recommended -->

      <div class="continue-watching px-6 mb-12">
        <div class="container mx-auto px-32">
          <div class="text-center">
            <p class="mt-8 text-2xl text-gray-800 font-bold mb-2">
              CHOOSE YOUR FAVOURITE PLATFORM
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
              ><img src="@/assets/HBO-Logo.png" alt="HBO"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/Netflix_logo.png" alt="Netflix"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/disneyplus-logo-fmi.png" alt="disney"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/hulu-logo.png" alt="disney"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/Amazon.png" alt="Amazon"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/vimeo-logo.png" alt="vimeo"
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
  </div>
</template>

<script>
import CategoriesPlatforms from "../components/categories/CategoriesPlatforms";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Side from "@/components/side/Side";

export default {
  components: {
    CategoriesPlatforms,
    Header,
    Footer,
    Side
  },
  name: "platforms"
};
</script>
