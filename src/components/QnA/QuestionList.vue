<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-icon-pencil-fill
          variant="outline-primary"
          @click="registQuestion"
          class="write font-weight-bold"
        ></b-icon-pencil-fill>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          :items="questions"
          :fields="fields"
          @row-clicked="viewQuestion"
        >
          <!-- A virtual column -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Constant from "@/util/Constant.js";

export default {
  data() {
    return {
      fields: [
        { key: "index", label: "번호" },
        // { key: "qnaId", label: "글번호", tdClass: "tdClass" },
        { key: "questionTitle", label: "제목", tdClass: "tdSubject" },
        { key: "questionAuthor", label: "작성자", tdClass: "tdClass" },
        { key: "questionCreatedTime", label: "작성일", tdClass: "tdClass" },
      ],
    };
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
  },
  created() {
    this.$store.dispatch(Constant.GET_QNAS);
  },
  methods: {
    registQuestion() {
      this.$router.push({
        name: "QuestionRegist",
      });
    },
    viewQuestion(question) {
      this.$router.push({
        name: "QuestionDetail",
        params: { qnaId: question.qnaId },
      });
    },
  },
};
</script>

<style scoped>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 500px;
  text-align: left;
}
.write:hover {
  cursor: pointer;
}
</style>
