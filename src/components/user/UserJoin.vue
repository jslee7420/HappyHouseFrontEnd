<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
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
                required
                placeholder="ID 입력...."
                @keyup="checkIdLen"
                ref="userId"
              ></b-form-input>
              <div>
                <span v-if="user.userId.trim().length == 0"></span>
                <span style="color: red" v-else-if="error.idLenError">
                  {{ error.errorMsg.idLength }}
                </span>
                <span style="color: red" v-else-if="error.idDuplicationError">
                  {{ error.errorMsg.duplicatedId }}
                </span>
                <span style="color: green" v-else-if="idConfirm">
                  {{ "사용 가능한 ID 입니다." }}
                </span>
              </div>
            </b-form-group>
            <b-button type="button" class="m-1" @click="checkIdDuplication"
              >ID 중복 확인</b-button
            >
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
                required
                placeholder="이름 입력...."
                @keyup.enter="confirm"
                ref="userName"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="주소 입력:" label-for="userAddress">
              <b-form-input
                id="userAddress"
                v-model="user.userAddress"
                required
                placeholder="주소 입력...."
                @keyup.enter="confirm"
                ref="userAddress"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호 입력:" label-for="userTel">
              <b-form-input
                id="userTel"
                v-model="user.userTel"
                required
                placeholder="전화번호 입력...."
                @keyup.enter="confirm"
                ref="userTel"
              ></b-form-input>
            </b-form-group>
            <b-button
              type="button"
              variant="success"
              class="m-1"
              @click="checkValue"
              >회원가입</b-button
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
  name: "UserJoin",
  data() {
    return {
      pwdCheck: null,
      idCheck: null,
      idConfirm: false,
      user: {
        userId: "",
        userPw: "",
        userName: "",
        userAddress: "",
        userTel: "",
      },
      error: {
        idLenError: false,
        idDuplicationError: false,
        pwdValidError: false,
        errorMsg: {
          duplicatedId: "중복된 아이디 입니다.",
          idLength: "사용 가능한 아이디는  4자 이상 16자 이하입니다.",
          checkPwd: "입력된 비밀번호가 다릅니다.",
        },
      },
    };
  },
  created() {
    this.initializeState();
  },
  beforeDestroy() {
    this.initializeState();
  },
  computed: {
    ...mapState(userStore, ["isIdDuplication"]),
  },
  watch: {
    user: {
      deep: true,
      handler(user) {
        if (this.idCheck !== user.userId) {
          this.idConfirm = false;
        }
      },
    },
  },
  methods: {
    ...mapActions(userStore, ["userRegist", "userIdCheck", "initializeState"]),
    async checkIdDuplication() {
      if (!this.error.idLenError) {
        await this.userIdCheck(this.user.userId);
      }
      this.error.idDuplicationError = this.isIdDuplication;
      if (!this.error.idDuplicationError) {
        this.idConfirm = true;
        this.idCheck = this.user.userId;
      }
    },
    async regist() {
      console.log(this.user);
      await this.userRegist(this.user);
      this.$router.push({ name: "UserLogin" });
    },
    checkIdLen() {
      if (
        this.user.userId.trim().length < 4 ||
        this.user.userId.trim().length > 16
      ) {
        this.error.idLenError = true;
      } else this.error.idLenError = false;
    },
    checkPwd() {
      if (this.pwdCheck !== this.user.userPw) {
        this.error.pwdValidError = true;
      } else this.error.pwdValidError = false;
    },
    checkValue() {
      // 사용자 입력값 체크하기
      let err = true;
      let msg = "";
      !this.user.userId && ((msg = "아이디를 입력해주세요"), (err = false));
      !this.idConfirm &&
        ((msg = "사용 가능한 ID 인지 확인하세요."), (err = false));
      this.error.pwdValidError &&
        ((msg = "비밀번호를 확인하세요."), (err = false));
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
      else this.regist();
    },
  },
};
</script>

<style></style>
