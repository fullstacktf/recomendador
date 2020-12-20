<template>
  <div class="bg-white-900">
    <Header />
      <section class="relative block" style="height: 500px;">
        <div class="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            class="w-full h-full absolute bg-white-900"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
        </div>
      </section>
      <section class="relative py-3 bg-white-900">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-72"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="../assets/Keanu.png"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style="max-width: 150px;"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 ml-48 sm:mt-0">
                      <button
        type=""
        class="ml-32 w-28 h-10 flex justify-center border border-transparent text-base font-bold rounded-full text-white bg-green-900 hover:bg-green-500 px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
      >
        LOGOUT
      </button>
      <button
        type=""
        class="ml-28 w-36 h-10 flex justify-center border border-transparent text-base font-bold rounded-full text-white bg-green-900 hover:bg-green-500 px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
      >
        DARK MODE
      </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >22</span
                      ><span class="text-sm text-gray-500">COMMENTS</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >10</span
                      ><span class="text-sm text-gray-500">FRIENDS</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >89</span
                      ><span class="text-sm text-gray-500">FILMS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center ml-2">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-black mb-2"
                >
                  USERNAME
                </h3>
              </div>
             <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="mt-2 ml-6">
            <form class="mt-3">
              <div class="flex py-2">

                <input type="text" class="flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="NICKNAME"/>
              </div>
              <div class="campo flex py-2">

                <input type="password" class=" flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="PASSWORD"/>
              </div>
              <div class="campo flex py-2">

                <input type="password" class=" flex-shrink text-black flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="REPEAT PASSWORD"/>
              </div>
              <router-link to="/index">
              <button class="bg-green-900 hover:bg-green-500 text-white px-3 py-2 font-bold rounded w-full mt-4 my-12">SAFE CHANGES</button>
              </router-link>
      </form>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  name: "Profile",
  components: {
    Header,
    Footer
  }
};
</script>