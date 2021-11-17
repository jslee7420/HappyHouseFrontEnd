<template>
  <b-container class="bv-example-row mt-3">
    <h2>질문 수정</h2>
    <question-regist-form type="modify" />
  </b-container>
</template>

<script>
import QuestionRegistForm from "./child/QuestionRegistForm.vue";

export default {
  components: {
    QuestionRegistForm,
  },
};
</script>

<style scoped></style>
