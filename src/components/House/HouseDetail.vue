<template>
  <div class="p-3 text-left">
    <!-- 닫기 버튼 -->
    <p class="text-right">
      <router-link :to="{ name: 'HouseList' }"
        ><b-icon-x font-scale="2"></b-icon-x
      ></router-link>
    </p>

    <!-- 거래내역 -->
    <h4 class="font-weight-bold">거래내역</h4>
    <b-table striped hover :items="houseDeals" :fields="fields">
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(date)="data">
        {{
          data.item.dealYear +
          "." +
          data.item.dealMonth +
          "." +
          data.item.dealDay
        }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

const houseStore = "houseStore";
export default {
  data() {
    return {
      a: this.$store.state.houseStore.isList,
      fields: [
        // { key: "index", label: "번호" },
        { key: "date", label: "거래일", sortable: "true" },
        { key: "area", label: "면적(㎡)", sortable: "true" },
        { key: "floor", label: "층수", sortable: "true" },
        { key: "dealAmount", label: "실거래가(만원)", sortable: "true" },
      ],
    };
  },
  computed: {
    ...mapState(houseStore, ["houseDeals"]),
  },
  methods: {
    closeDetail() {
      this.$store.dispatch("houseStore/toggleSideBar");
    },
    datesSorter(a, b) {
      if (new Date(a) < new Date(b)) return 1;
      if (new Date(a) > new Date(b)) return -1;
      return 0;
    },
  },
};
</script>

<style scoped></style>
