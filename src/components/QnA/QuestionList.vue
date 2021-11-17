<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()"
          >글쓰기</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          :items="questions"
          :fields="fields"
          @row-clicked="viewArticle"
        >
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          questionId: "1",
          questionTitle: "회원가입은 어떻게 하나요?",
          questionAuthor: "이정수",
          questionCreatedTime: "2021.11.17",
          answerAuthor: "운영자",
        },
        {
          questionId: "2",
          questionTitle: "회원탈퇴는 어떻게 하나요?",
          questionAuthor: "박상일",
          questionCreatedTime: "2021.11.17",
        },
      ],
      fields: [
        { key: "questionId", label: "글번호", tdClass: "tdClass" },
        { key: "questionTitle", label: "제목", tdClass: "tdSubject" },
        { key: "questionAuthor", label: "작성자", tdClass: "tdClass" },
        { key: "questionCreatedTime", label: "작성일", tdClass: "tdClass" },
      ],
    };
  },
  // computed: {
  //   questions() {
  //     return this.$store.state.questions;
  //   },
  // },
  // created() {
  //   this.$store.dispatch.getQuestions();
  // },
};
</script>

<style scoped>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
</style>
