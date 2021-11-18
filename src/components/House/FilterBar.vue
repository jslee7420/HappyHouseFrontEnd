<template>
  <div class="border-bottom">
    <b-form inline class="container p-2" @submit.prevent="onSubmit">
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="options"
        :value="null"
      ></b-form-select>
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="options"
        :value="null"
      ></b-form-select>
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="options"
        :value="null"
      ></b-form-select>

      <b-button type="submit" variant="primary">조회</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: null, text: "시도 선택" },
        { value: 1, text: "서울특별시" },
        { value: 2, text: "부산광역시" },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
