<template>
  <div>
    <my-header></my-header>
    <!--<my-signup></my-signup>-->
    <my-categories></my-categories>
    <my-slider></my-slider>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
//import Signup from './components/signup/Signup.vue';
import Categories from './components/categories/Categories.vue';
import Slider from './components/slider/Slider.vue';

  export default {
     components:{
        'my-header':Header,
        'my-footer':Footer,
        //'my-signup':Signup,
        'my-categories':Categories,
        'my-slider':Slider
     }
  }
</script>

<style>
* {
  box-sizing:border-box;
  margin:0;
}

body {
  background-color: F1F1F1;
}
</style>