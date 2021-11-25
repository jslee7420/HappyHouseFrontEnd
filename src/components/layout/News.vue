<template>
  <div>
    <h2 class="font-weight-bolder">뉴스 <b-icon-newspaper /></h2>
    <hr class="horizontalLine" />
    <!-- <div>{{ news }}</div> -->
  </div>
</template>

<script>
// import { mapActions } from "vuex";

// const newsStore = "newsStore";

export default {
  // computed: {
  //   ...mapState(newsStore, ["news"]),
  // },
  methods: {},
  mounted() {
    // this.$store.dispatch("newsStore/getNews");
  },
};
</script>

<style scoped>
hr {
  border: none;
  height: 1px;
  /* Set the hr color */
  color: #333; /* old IE */
  background-color: #333; /* Modern Browsers */
}
</style>
