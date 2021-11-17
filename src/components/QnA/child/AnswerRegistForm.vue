<template>
  <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit">
        <b-form-group
          id="AnswerAuthor-group"
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
            type="text"
            ref="answerContent"
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
          >답변 작성</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else
          >답변 수정</b-button
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
        answerAuthor: "",
        answerContent: "",
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    console.log(this.type);
    if (this.type === "modify") {
      this.answer.answerAuthor = this.$store.state.qna.answer.answerAuthor;
      this.answer.answerContent = this.$store.state.qna.answer.answerContent;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";
      !this.answer.answerAuthor &&
        ((msg = "작성자를 입력해주세요"),
        (err = false),
        this.$refs.answerAuthor.focus());
      err &&
        !this.answer.answerContent &&
        ((msg = "내용을 입력해주세요"),
        (err = false),
        this.$refs.answerContent.focus());

      if (!err) alert(msg);
      else this.type === "register" ? this.registAnswer() : this.modifyAnswer();
    },
    registAnswer() {
      this.$store
        .dispatch(Constant.REGIST_ANSWER, {
          qnaId: this.$route.params.qnaId,
          answerAuthor: this.answer.answerAuthor,
          answerContent: this.answer.answerContent,
        })
        .then(() => {
          alert("답변 등록이 완료되었습니다.");
          this.$router.go();
        })
        .catch(() => alert("등록 처리 중 문제가 발생했습니다."));
    },
    modifyAnswer() {
      this.$store
        .dispatch(Constant.MODIFY_ANSWER, {
          qnaId: this.$route.params.qnaId,
          answerAuthor: this.answer.answerAuthor,
          answerContent: this.answer.answerContent,
        })
        .then(() => {
          alert("답변 수정이 완료되었습니다.");
          this.$router.go();
        })
        .catch(() => alert("수정 처리 중 문제가 발생했습니다."));
    },
    moveList() {
      this.$router.push({ name: "QuestionList" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
