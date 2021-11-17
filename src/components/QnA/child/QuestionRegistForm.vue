<template>
  <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit">
        <b-form-group
          id="questionAuthor-group"
          label="작성자:"
          label-for="questionAuthor"
          description="작성자를 입력하세요."
        >
          <b-form-input
            id="questionAuthor"
            v-model="question.questionAuthor"
            type="text"
            required
            placeholder="작성자 입력"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="questionTitle-group"
          label="제목:"
          label-for="questionTitle"
          description="제목을 입력하세요."
        >
          <b-form-input
            id="questionTitle"
            v-model="question.questionTitle"
            type="text"
            required
            placeholder="제목 입력..."
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="questionContent-group"
          label="내용:"
          label-for="questionContent"
        >
          <b-form-textarea
            id="questionContent"
            v-model="question.questionContent"
            placeholder="내용 입력..."
            rows="10"
            max-rows="15"
          ></b-form-textarea>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          class="m-1"
          v-if="this.type === 'register'"
          >글작성</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else
          >글수정</b-button
        >
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
// import http from "@/util/http-common.js";

export default {
  name: "QuestionRegistForm",
  data() {
    return {
      question: {
        questionId: 0,
        questionAuthor: "",
        questionTitle: "",
        questionContent: "",
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      // http.get(`/board/${this.$route.params.articleno}`).then(({ data }) => {
      //   // this.article.articleno = data.article.articleno;
      //   // this.article.userid = data.article.userid;
      //   // this.article.subject = data.article.subject;
      //   // this.article.content = data.article.content;
      //   this.article = data;
      // });
      // this.isUserid = true;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";
      !this.article.userid &&
        ((msg = "작성자 입력해주세요"),
        (err = false),
        this.$refs.userid.focus());
      err &&
        !this.article.subject &&
        ((msg = "제목 입력해주세요"),
        (err = false),
        this.$refs.subject.focus());
      err &&
        !this.article.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      else
        this.type === "register" ? this.registArticle() : this.modifyArticle();
    },
    registArticle() {
      // http
      //   .post(`/board`, {
      //     userid: this.article.userid,
      //     subject: this.article.subject,
      //     content: this.article.content,
      //   })
      //   .then(({ data }) => {
      //     let msg = "등록 처리시 문제가 발생했습니다.";
      //     if (data === "success") {
      //       msg = "등록이 완료되었습니다.";
      //     }
      //     alert(msg);
      //     this.moveList();
      //   });
    },
    modifyArticle() {
      // http
      //   .put(`/board`, {
      //     articleno: this.article.articleno,
      //     userid: this.article.userid,
      //     subject: this.article.subject,
      //     content: this.article.content,
      //   })
      //   .then(({ data }) => {
      //     let msg = "수정 처리시 문제가 발생했습니다.";
      //     if (data === "success") {
      //       msg = "수정이 완료되었습니다.";
      //     }
      //     alert(msg);
      //     // 현재 route를 /list로 변경.
      //     this.$router.push({ name: "BoardList" });
      //   });
    },
    moveList() {
      this.$router.push({ name: "QuestionList" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
