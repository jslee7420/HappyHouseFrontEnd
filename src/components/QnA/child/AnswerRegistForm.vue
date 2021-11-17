<template>
  <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit">
        <b-form-group
          id="answerAuthor-group"
          label="작성자:"
          label-for="answerAuthor"
          description="작성자를 입력하세요."
        >
          <b-form-input
            id="answerAuthor"
            v-model="answer.answerAuthor"
            type="text"
            ref="answerAuthor"
            placeholder="작성자 입력"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="answerContent-group"
          label="내용:"
          label-for="answerContent"
        >
          <b-form-textarea
            id="answerContent"
            v-model="answer.answerContent"
            placeholder="내용 입력..."
            rows="10"
            max-rows="15"
            ref="answerContent"
          ></b-form-textarea>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          class="m-1"
          v-if="this.type === 'register'"
          >답글작성</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else
          >답글수정</b-button
        >
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import Constant from "@/util/Constant.js";

export default {
  name: "AnswerRegistForm",
  data() {
    return {
      answer: {
        questionId: "",
        answerAuthor: "",
        answerContent: "",
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
      !this.answer.answerAuthor &&
        ((msg = "작성자 입력해주세요"),
        (err = false),
        this.$refs.answerAuthor.focus());
      err &&
        !this.answer.answerContent &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.answerContent.focus());

      if (!err) alert(msg);
      else this.type === "register" ? this.registAnswer() : this.modifyAnswer();
    },
    registAnswer() {
      console.log("resgitArticle called");
      this.$store.dispatch(Constant.REGIST_ANSWER);
    },
    modifyAnswer() {
      console.log("modifyArticle called");
    },
    moveList() {
      this.$router.push({ name: "QuestionList" });
    },
  },
};
</script>

<style scoped></style>
