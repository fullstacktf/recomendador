<template>
    <div class="flex flex-wrap justify-end">
        <div class="md:w-1/4 sm:w-1/4 h-screen bg-green-800 p-6">
            <div class="flex justify-between items-center">
                <h4 class="uppercase text-white text-4xl font-blond">URecommend</h4>
            </div>
            <p class="my-3 text-white font-light tracking-wide font-sans leading-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <form class="mt-3">
              <div class="flex py-2">
                <img href="#" alt="username" class="flex items-center rounded rounded-r-none bg-white border-2 border-gray-300 px-1.5 w-8 h-9" src="../../assets/user.svg"/>  
                <input type="text" class="flex-shrink flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="USERNAME"/>
              </div>
              <div class="flex py-2">
                <img href="#" alt="fullname" class="flex items-center rounded rounded-r-none bg-white border-2 border-gray-300 px-1.5 w-8 h-9" src="../../assets/user.svg"/>  
                <input type="text" class="flex-shrink flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="FULLNAME"/>
              </div>
              <div class="flex py-2">
                <img href="#" alt="email" class="flex items-center rounded rounded-r-none bg-white border-2 border-gray-300 px-1.5 w-8 h-9" src="../../assets/email.svg"/>  
                <input type="email" class="flex-shrink flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="EMAIL"/>
              </div>
              <div class="campo flex py-2">
                <img href="#" alt="password" class="flex items-center rounded rounded-r-none bg-white border-2 border-gray-300 px-1 w-8 h-9" src="../../assets/padlock.svg"/> 
                <input type="password" class=" flex-shrink flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="PASSWORD"/>
              </div>
              <div class="campo flex py-2">
                <img href="#" alt="Rpassword" class="flex items-center rounded rounded-r-none bg-white border-2 border-gray-300 px-1 w-8 h-9" src="../../assets/padlock.svg"/> 
                <input type="password" class=" flex-shrink flex-grow flex-auto w-px flex-1 bg-white border-2 border-gray-300 h-9 rounded rounded-l-none px-3" placeholder="REPEAT PASSWORD"/>
              </div>
              <button class="bg-green-500 text-white px-3 py-2 font-bold rounded w-full mt-4">SUBMIT</button>
              <div class="flex justify-between">
                <label class="block font-semibold my-4">
                  <input type="checkbox" class="text-green-500"/> 
                  <span class="p-2 text-sm text-white leading-snug">Remember Me</span>
                </label>
                <label class="block font-semibold my-4">
                  <a href="#" class="cursor-pointer tracking-tighter text-white text-sm border-b-2 border-gray-300 hover:border-gray-500">
                    <span>Forgot Password?</span></a>
                </label>
              </div>
      </form>
    </div>
 </div>

</template>
<script>
     export default{
     name:"Signup",
     data(){
       return{}
     }
   }
</script>