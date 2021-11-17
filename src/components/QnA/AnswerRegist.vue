<template>
  <b-container class="bv-example-row mt-3">
    <h2>답변 등록</h2>
    <answer-regist-form type="regist" />
  </b-container>
</template>

<script>
import AnswerRegistForm from "./child/AnswerRegistForm.vue";

export default {
  components: {
    AnswerRegistForm,
  },
};
</script>

<style scoped></style>
