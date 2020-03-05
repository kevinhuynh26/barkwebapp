<template>
  <div>
    <Navbar/>
    <div class="container bodyCustom">
    <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

document.title = "home";

export default {
  name: 'App',
  components: {
    Navbar
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || "bark bark"
    }
  }
};

</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css";
@import "https://fonts.googleapis.com/css?family=Spartan&display=swap";
@import "./assets/styles.css";

.bodyCustom {
  padding-top: 20px;
}
</style>
