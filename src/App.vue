<template>
  <div id="app">
    <div class="content">
      <navbar></navbar>
      <router-view />
    </div>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import FooterComp from "@/components/layout/Footer.vue";

export default {
  components: {
    Navbar,
    FooterComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  min-height: 100vh;
}
</style>
