<template>
  <div class="container">
    <b-navbar toggleable="lg" type="light" variant="light">
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

          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">실거래가 조회</b-nav-item>
          <b-nav-item href="#">공지사항</b-nav-item>
          <b-nav-item href="/qna">Q&A</b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>계정</em>
            </template>
            <b-dropdown-item href="/user/login">로그인</b-dropdown-item>
            <b-dropdown-item href="/user/join">회원가입</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 20px;
}
</style>
