<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원정보</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-form-group label="ID:" label-for="userId">
              <b-form-input
                id="userId"
                v-model="user.userId"
                readonly
                ref="userId"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호:" label-for="userPw">
              <b-form-input
                type="password"
                id="userPw"
                v-model="user.userPw"
                required
                placeholder="비밀번호 입력...."
                ref="userPw"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호 확인:" label-for="pwdcheck">
              <b-form-input
                type="password"
                id="pwdCheck"
                v-model.lazy="pwdCheck"
                required
                placeholder="비밀번호 확인...."
                @keyup="checkPwd"
                ref="pwdCheck"
              ></b-form-input>
              <div>
                <span style="color: red" v-if="error.pwdValidError">
                  {{ error.errorMsg.checkPwd }}
                </span>
              </div>
            </b-form-group>
            <b-form-group label="이름 입력:" label-for="userName">
              <b-form-input
                id="userName"
                v-model="user.userName"
                required
                ref="userName"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="주소 입력:" label-for="userAddress">
              <b-form-input
                id="userAddress"
                v-model="user.userAddress"
                required
                ref="userAddress"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호 입력:" label-for="userTel">
              <b-form-input
                id="userTel"
                v-model="user.userTel"
                required
                @keyup.enter="confirm"
                ref="userTel"
              ></b-form-input>
            </b-form-group>
            <b-button type="button" class="m-1" @click="movePage"
              >확인</b-button
            >
            <b-button
              type="button"
              class="m-1"
              variant="outline-primary"
              @click="checkValue"
              >회원정보 수정</b-button
            >
            <b-button type="button" class="m-1" variant="danger" @click="remove"
              >회원 탈퇴</b-button
            >
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  name: "userProfile",
  data() {
    return {
      pwdCheck: null,
      user: null,
      error: {
        pwdValidError: false,
        errorMsg: {
          checkPwd: "입력된 비밀번호가 다릅니다.",
        },
      },
    };
  },
  created() {
    this.user = this.userInfo;
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(userStore, ["userUpdate", "userDelete"]),
    async modify() {
      if (confirm("회원 정보를 현재 상태로 수정하시겠습니까?")) {
        await this.userUpdate(this.user);
        this.movePage();
      }
    },
    async remove() {
      if (confirm("회원을 탈퇴하시겠습니까?")) {
        await this.userDelete(this.user.userId);
        this.movePage();
      }
    },
    checkPwd() {
      if (this.pwdCheck !== this.user.userPw) {
        this.error.pwdValidError = true;
      } else this.error.pwdValidError = false;
    },
    checkValue() {
      let err = true;
      let msg = "";
      err &&
        !this.user.userName &&
        ((msg = "이름을 입력해주세요"), (err = false));
      err &&
        !this.user.userAddress &&
        ((msg = "주소를 입력해주세요"), (err = false));
      err &&
        !this.user.userTel &&
        ((msg = "전화번호를 입력해주세요"), (err = false));

      if (!err) alert(msg);
      else this.modify();
    },
    movePage() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>