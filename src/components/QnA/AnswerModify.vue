<template>
  <b-container class="bv-example-row mt-3">
    <h2>답변 수정</h2>
    <answer-regist-form type="modify" />
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
