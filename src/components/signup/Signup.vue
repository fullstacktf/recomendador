<template>
  <div class="container max-w-full mx-auto py-18 px-6">
    <div>
      <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="mt-6">
              <span>
                <h4 class="mb-8 uppercase text-green-500 text-5xl font-blond">
                  URecommend
                </h4>
              </span>
              <form
                class="mt-3"
                @submit="checkForm"
                action="https://api.urecommend.me/users"
                method="post"
                novalidate="true"
              >
                <div class="flex py-2">
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                    class="flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3"
                    placeholder="USERNAME"
                  />
                </div>
                <div class="flex py-2">
                  <input
                    type="text"
                    class="flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3"
                    placeholder="FULLNAME"
                  />
                </div>
                <div class="flex py-2">
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    class="flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3"
                    placeholder="EMAIL"
                  />
                </div>
                <div class="campo flex py-2">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    class=" flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3"
                    placeholder="PASSWORD"
                  />
                </div>
                <div class="campo flex py-2">
                  <input
                    type="password"
                    class=" flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3"
                    placeholder="REPEAT PASSWORD"
                  />
                </div>

                <input
                  class="bg-green-900 hover:bg-green-500 text-white px-3 py-2 font-bold rounded w-full mt-4"
                  type="submit"
                  value="SUBMIT"
                />

                <div class="flex justify-between">
                  <label class="block font-semibold my-4">
                    <input type="checkbox" class="" />
                    <span class="p-2 text-sm center text-black leading-snug"
                      >Remember Me</span
                    >
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Signup",
  data() {
    return {
      errors: [],
      name: "",
      password: "",
      email: ""
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      console.log("checkForm", this.name);
      if (!this.name) {
        this.errors.push("El nombre es obligatorio.");
        alert("nombre obligatorio");
      }
      if (!this.password) {
        this.errors.push("El campo contraseña es obligatorio");
      }
      if (!this.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
      }

      axios
        .post("https://api.urecommend.me/users", {
          name: this.name,
          password: this.password,
          email: this.email
        })
        .then(() => {
          this.$router.push("/quizz");
        });

      e.preventDefault();
    },
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
