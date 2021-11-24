<template>
  <div>
    <carousel></carousel>
    <b-container class="my-5">
      <b-row>
        <b-col>
          <news></news>
        </b-col>
        <b-col>
          <h2 class="font-weight-bolder">Q&A 게시판 <b-icon-clipboard /></h2>
          <hr class="horizontalLine" />
          <question-list></question-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from "@/components/layout/Carousel.vue";
import QuestionList from "@/components/qna/QuestionList.vue";
import News from "@/components/layout/News.vue";

export default {
  components: {
    Carousel,
    QuestionList,
    News,
  },
};
</script>

<style scoped>
hr {
  border: none;
  height: 1px;
  /* Set the hr color */
  color: #333; /* old IE */
  background-color: #333; /* Modern Browsers */
}
</style>
