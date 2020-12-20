<template>
  <div class="container mx-auto fixed inset-x-0 top-40">
    <div class="my-8">
      <HeaderLogin />
      <Login />
      <Footer />
    </div>
  </div>
</template>

<script>
import Login from "../components/login/Login";
import HeaderLogin from "../components/header/HeaderLogin";
import Footer from "../components/footer/Footer";

export default {
  components: {
    Login,
    HeaderLogin,
    Footer
  },
  name: "home"
};
</script>
