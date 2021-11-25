<template>
  <div>
    <b-form-group>
      <b-form-radio v-model="selected" name="some-radios" value="dealVolume"
        >거래량</b-form-radio
      >
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="averagePricePerPyeong"
        >평균 평당가</b-form-radio
      >
    </b-form-group>

    <b-table
      striped
      hover
      :items="dealTrends"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      responsive="sm"
    ></b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const dealTrendStore = "dealTrendStore";

export default {
  name: "dealTrendList",
  data() {
    return {
      selected: "dealVolume",
      sortBy: "district",
      sortDesc: false,
      fields: null,
      dealVolume: [
        {
          key: "district",
          label: "지역",
          sotable: true,
        },
        {
          key: "quarterlyDealVolume.firstQuarterDealVolume",
          label: "1/4 분기 거래량",
          sotable: true,
        },
        {
          key: "quarterlyDealVolume.secondQuarterDealVolume",
          label: "2/4 분기 거래량",
          sotable: true,
        },
        {
          key: "quarterlyDealVolume.thirdQuarterDealVolume",
          label: "3/4 분기 거래량",
          sotable: true,
        },
        {
          key: "quarterlyDealVolume.fourthQuarterDealVolume",
          label: "4/4 분기 거래량",
          sotable: true,
        },
      ],
      AveragePricePerPyeong: [
        {
          key: "district",
          label: "지역",
          sotable: true,
        },
        {
          key: "quarterlyAveragePricePerPyeong.firstQuarterAveragePricePerPyeong",
          label: "1/4 분기 평균 평단가",
          sotable: true,
        },
        {
          key: "quarterlyAveragePricePerPyeong.secondQuarterAveragePricePerPyeong",
          label: "2/4 분기 평균 평단가",
          sotable: true,
        },
        {
          key: "quarterlyAveragePricePerPyeong.thirdQuarterAveragePricePerPyeong",
          label: "3/4 분기 평균 평단가",
          sotable: true,
        },
        {
          key: "quarterlyAveragePricePerPyeong.fourthQuarterAveragePricePerPyeong",
          label: "4/4 분기 평균 평단가",
          sotable: true,
        },
      ],
    };
  },
  created() {
    this.dealTrendList();
    this.fields = this.dealVolume;
  },
  computed: {
    ...mapState(dealTrendStore, ["dealTrends"]),
  },
  methods: {
    ...mapActions(dealTrendStore, ["dealTrendList"]),
  },
  watch: {
    selected() {
      if (this.selected === "dealVolume") {
        this.fields = this.dealVolume;
      } else if (this.selected === "averagePricePerPyeong") {
        this.fields = this.AveragePricePerPyeong;
      }
    },
  },
};
</script>

<style>
</style>