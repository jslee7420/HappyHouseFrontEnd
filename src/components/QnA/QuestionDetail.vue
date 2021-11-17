<template>
  <div>
    <b-container class="bv-example-row mt-3">
      <b-row class="mb-1">
        <b-col class="text-left">
          <b-button variant="outline-primary" @click="listQnA">목록</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button
            variant="outline-info"
            size="sm"
            @click="moveModifyQuestion"
            class="mr-2"
            >글수정</b-button
          >
          <b-button variant="outline-danger" size="sm" @click="deleteQuestion"
            >글삭제</b-button
          >
        </b-col>
      </b-row>
      <b-row class="mb-1">
        <b-col>
          <b-card
            :header-html="`<h3>
          ${qna.questionTitle}</h3><div><h6>${qna.questionAuthor}</div><div>${qna.questionCreatedTime}</h6></div>`"
            class="mb-2"
            border-variant="dark"
            no-body
          >
            <b-card-body class="text-left">
              <div v-html="questionContent"></div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <div v-if="qna.answer !== null && !modifyFlag">
        <b-row class="mb-1">
          <b-col>
            <b-card
              :header-html="`<h3>
          답변</h3><div><h6>${qna.answer.answerAuthor}</div><div>${qna.answer.answerCreatedTime}</h6></div>`"
              class="mb-2"
              border-variant="dark"
              no-body
            >
              <b-card-body class="text-left">
                <div v-html="answerContent"></div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col class="text-right">
            <b-button
              variant="outline-info"
              size="sm"
              @click="modifyAnswer"
              class="mr-2"
              >답글수정</b-button
            >
            <b-button variant="outline-danger" size="sm" @click="deleteAnswer"
              >답글삭제</b-button
            >
          </b-col>
        </b-row>
      </div>

      <answer-regist-form v-else-if="!modifyFlag" type="register" />
      <answer-regist-form v-else type="modify" />
    </b-container>
  </div>
</template>

<script>
import Constant from "@/util/Constant.js";
import AnswerRegistForm from "@/components/QnA/child/AnswerRegistForm";

export default {
  data() {
    return {
      modifyFlag: false,
    };
  },
  computed: {
    qna() {
      return this.$store.state.qna;
    },
    questionContent() {
      if (this.qna.questionContent)
        return this.qna.questionContent.split("\n").join("<br>");
      return "";
    },
    answerContent() {
      if (this.qna.answer.answerContent)
        return this.qna.answer.answerContent.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    this.$store
      .dispatch(Constant.GET_QNA, this.$route.params.qnaId)
      .then(console.log);
  },
  methods: {
    listQnA() {
      this.$router.push({ name: "QuestionList" });
    },
    moveModifyQuestion() {
      this.$router.push({
        name: "QuestionModify",
        params: { qnaId: this.$route.params.qnaId },
      });
    },
    deleteQuestion() {
      console.log("deleteQuestion called");
      this.$store
        .dispatch(Constant.REMOVE_QUESTION, this.qna.qnaId)
        .then(() => {
          alert("삭제가 완료되었습니다.");
          this.$router.push({ name: "QuestionList" });
        });
    },
    modifyAnswer() {
      this.modifyFlag = true;
    },
    deleteAnswer() {
      this.$store.dispatch(Constant.REMOVE_ANSWER, this.qna.qnaId).then(() => {
        alert("삭제가 완료되었습니다.");
        this.$router.push({ name: "QuestionList" });
      });
    },
  },
  components: {
    AnswerRegistForm,
  },
};
</script>

<style lang="scss" scoped></style>
