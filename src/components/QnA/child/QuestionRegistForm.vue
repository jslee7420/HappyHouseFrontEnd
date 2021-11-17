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
            type="text"
            required
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
import Constant from "@/util/Constant.js";

export default {
  name: "QuestionRegistForm",
  data() {
    return {
      question: {
        qnaId: "",
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
      this.qnaId = this.$store.state.qna.qnaId;
      this.questionAuthor = this.$store.state.qna.questionAuthor;
      this.questionTitle = this.$store.state.qna.questionTitle;
      this.questionContent = this.$store.state.qna.questionContent;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";
      !this.question.questionAuthor &&
        ((msg = "작성자를 입력해주세요"),
        (err = false),
        this.$refs.questionAuthor.focus());
      err &&
        !this.question.questionTitle &&
        ((msg = "제목을 입력해주세요"),
        (err = false),
        this.$refs.questionTitle.focus());
      err &&
        !this.question.questionContent &&
        ((msg = "내용을 입력해주세요"),
        (err = false),
        this.$refs.questionContent.focus());

      if (!err) alert(msg);
      else
        this.type === "register"
          ? this.registQuestion()
          : this.modifyQuestion();
    },
    registQuestion() {
      this.$store
        .dispatch(Constant.REGIST_QUESTION, {
          questionAuthor: this.question.questionAuthor,
          questionTitle: this.question.questionTitle,
          questionContent: this.question.questionContent,
        })
        .then(() => {
          alert("등록이 완료되었습니다.");
          this.moveList();
        })
        .catch(() => alert("등록 처리 중 문제가 발생했습니다."));
    },
    modifyArticle() {
      this.$store
        .dispatch(Constant.MODIFY_QUESTION, {
          qnaId: this.qnaId,
          questionAuthor: this.question.questionAuthor,
          questionTitle: this.question.questionTitle,
          questionContent: this.question.questionContent,
        })
        .then(() => {
          alert("수정이 완료되었습니다.");
          this.moveList();
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
