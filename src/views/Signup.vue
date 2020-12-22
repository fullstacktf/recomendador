<template>
  <div class="container mx-auto fixed inset-x-0 top-40">
    <div class="my-8">
      <HeaderSignup />
      <Signup />
      <Footer />
    </div>
  </div>
</template>

<script>
import Signup from "../components/signup/Signup";
import HeaderSignup from "../components/header/HeaderSignup";
import Footer from "../components/footer/Footer";

export default {
  name: "signup",
  components: {
    Signup,
    HeaderSignup,
    Footer
  }
};
</script>
