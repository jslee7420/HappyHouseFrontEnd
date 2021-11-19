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
                @keyup.enter="confirm"
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
                readonly
                ref="userName"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="주소 입력:" label-for="userAddress">
              <b-form-input
                id="userAddress"
                v-model="user.userAddress"
                required
                @keyup.enter="confirm"
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
            <b-button type="button" class="m-1" @click="checkValue"
              >확인</b-button
            >
            <b-button type="button" class="m-1" @click="checkValue"
              >회원정보 수정</b-button
            >
            <b-button type="button" class="m-1" @click="checkValue"
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
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  name: "userProfile",
  data() {
    return {};
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
};
</script>

<style></style>