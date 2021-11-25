<template>
  <div class="border-bottom">
    <b-form inline class="container p-2" @submit.prevent="onSubmit">
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="sidoCode"
        :options="sidos"
        @change="gugunList"
      ></b-form-select>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="gugunCode"
        :options="guguns"
        @change="dongList"
      ></b-form-select>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="dongCode"
        :options="dongs"
      ></b-form-select>

      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="buildYearOption"
        :options="options"
      ></b-form-select>

      <b-button type="submit" variant="primary" class="mb-2 mr-sm-2 mb-sm-0"
        >조회</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const addressStore = "addressStore";

export default {
  name: "FilterBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      buildYearOption: 0,
      options: [
        { text: "건축년도", value: 0 },
        { text: "신축", value: 1 },
        { text: "구축", value: 2 },
      ],
    };
  },
  computed: {
    ...mapState(addressStore, ["sidos", "guguns", "dongs"]),
  },
  created() {
    if (this.$route.path === "/house/list") {
      this.dongCode = 1168010100;
      this.onSubmit();
      this.dongCode = null;
      this.getSido();
    }
  },
  methods: {
    ...mapActions(addressStore, ["getSido", "getGugun", "getDong"]),
    gugunList() {
      this.gugunCode = null; // 시/구/군 선택 초기화
      this.dongCode = null; // 동 선택 초기화
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList() {
      this.dongCode = null;
      if (this.gugunCode)
        this.getDong({ sidoCode: this.sidoCode, gugunCode: this.gugunCode });
    },
    onSubmit() {
      if (this.dongCode) {
        this.$store
          .dispatch("houseStore/getHouses", {
            dongCode: this.dongCode,
            buildYear: this.buildYearOption,
          })
          .then(() => {
            this.$root.$emit("updateMap");
            if (this.$router.currentRoute.name !== "HouseList")
              this.$router.push({ name: "HouseList" });
          });
      }
    },
  },
};
</script>

<style scoped></style>
