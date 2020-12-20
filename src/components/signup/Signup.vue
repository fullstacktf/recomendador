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
              <form class="mt-3">
                <div class="flex py-2">
                  <input
                    type="text"
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
                    type="email"
                    class="flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3"
                    placeholder="EMAIL"
                  />
                </div>
                <div class="campo flex py-2">
                  <input
                    type="password"
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
                <router-link to="/quizz">
                  <button
                    class="bg-green-900 hover:bg-green-500 text-white px-3 py-2 font-bold rounded w-full mt-4"
                  >
                    SUBMIT
                  </button>
                </router-link>
                <div class="flex justify-between">
                  <label class="block font-semibold my-4">
                    <input type="checkbox" class="" />
                    <span class="p-2 text-sm  text-black leading-snug"
                      >Remember Me</span
                    >
                  </label>
                  <label class="block font-semibold my-4">
                    <a
                      href="#"
                      class="cursor-pointer tracking-tighter text-green-500 text-sm border-b-2 border-green-500 hover:border-gray-500"
                    >
                      <span>Forgot Password?</span></a
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
export default {
  name: "Signup",
  data() {
    return {};
  }
};
</script>
