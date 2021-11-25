<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="border-bottom"
    >
      <div class="container">
        <b-navbar-brand :to="{ name: 'Home' }" class="logo"
          >Happy House</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

            <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'House' }">실거래가 조회</b-nav-item>
            <b-nav-item href="#">공지사항</b-nav-item>
            <b-nav-item :to="{ name: 'QuestionList' }">Q&A</b-nav-item>
            <b-nav-item
              v-if="isLogin"
              :to="{ name: 'Bookmark' }"
              @click="showBookmarkedHouses"
              >관심 단지</b-nav-item
            >
            <b-nav-item v-if="!isLogin" :to="{ name: 'UserLogin' }"
              >로그인</b-nav-item
            >

            <b-nav-item v-else :to="{ name: 'UserProfile' }"
              >마이 페이지</b-nav-item
            >
            <b-nav-item v-if="!isLogin" :to="{ name: 'UserJoin' }"
              >회원가입</b-nav-item
            >
            <b-nav-item v-else @click="userLogout">로그아웃</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  computed: {
    ...mapState(userStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(userStore, ["userLogout"]),
    showBookmarkedHouses() {
      this.$store
        .dispatch(
          "houseStore/getBookmarkedHouses",
          this.$store.getters["userStore/checkUserInfo"].userId
        )
        .then(() => {
          this.$root.$emit("updateMap");
        });
    },
  },
};
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 20px;
}
</style>
