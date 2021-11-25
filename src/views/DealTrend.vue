<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-steelblue">지역 별 거래 동향</h3>
    <deal-trend-list></deal-trend-list>
    <router-view></router-view>
  </b-container>
</template>

<script>
import DealTrendList from "@/components/dealTrend/DealTrendList.vue";
export default {
  components: {
    DealTrendList,
  },
};
</script>

<style>
</style>