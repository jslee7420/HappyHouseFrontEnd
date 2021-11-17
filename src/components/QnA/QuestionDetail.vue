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
            :header-html="`<h3>${qna.qnaId}.
          ${qna.questionTitle}</h3><div><h6>${qna.userid}</div><div>${article.regtime}</h6></div>`"
            class="mb-2"
            border-variant="dark"
            no-body
          >
            <b-card-body class="text-left">
              <div v-html="message"></div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Constant from "@/util/Constant.js";

export default {
  computed: {
    qna() {
      return this.$store.state.qna;
    },
  },
  created() {
    this.$store.dispatch(Constant.GET_QNA, this.$route.params.qnaId);
  },
  methods: {
    listQnA() {
      this.$router.push({ name: "QuestionList" });
    },
    moveModifyQuestion() {
      this.$router.push({ name: "QuestionModify" });
    },
    deletQuestion() {
      console.log("deleteQuestion called");
    },
  },
};
</script>

<style lang="scss" scoped></style>
