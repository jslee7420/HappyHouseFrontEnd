<template>
  <div class="p-3 text-left list">
    <!-- 닫기 버튼 -->
    <p class="text-right">
      <router-link
        v-if="this.$route.name === 'HouseDetail'"
        :to="{ name: 'HouseList' }"
        ><b-icon-x font-scale="2"></b-icon-x
      ></router-link>
      <router-link v-else :to="{ name: 'BookmarkList' }"
        ><b-icon-x font-scale="2"></b-icon-x
      ></router-link>
    </p>

    <!-- 주택 단지 정보 -->
    <house-list-row
      class="mb-3"
      :aptCode="houseInfo.aptCode"
      :aptName="houseInfo.aptName"
      :dongName="houseInfo.dongName"
      :sidoName="houseInfo.sidoName"
      :gugunName="houseInfo.gugunName"
      :buildYear="houseInfo.buildYear"
      :jibun="houseInfo.jibun"
      :recentPrice="houseInfo.recentPrice"
      :isDetail="true"
      :pricePerPyeong="houseInfo.pricePerPyeong"
    />
    <!-- 거래내역 -->
    <h4 class="font-weight-bold">거래내역</h4>

    <!-- 차트 -->
    <house-deal-amount-chart></house-deal-amount-chart>
    <br />

    <!-- 필터 -->
    <div>
      <h5 class="font-weight-bold">필터</h5>
      <b-tabs content-class="mt-3" fill>
        <b-tab title="날짜" active
          ><div>
            <b-form-group
              label="이후:"
              label-for="startDate"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-datepicker
                id="startDate"
                v-model="startDate"
              ></b-form-datepicker>
            </b-form-group>

            <b-form-group
              label="이전:"
              label-for="endDate"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-datepicker
                id="endDate"
                v-model="endDate"
              ></b-form-datepicker>
            </b-form-group></div
        ></b-tab>
        <b-tab title="면적"
          ><div>
            <b-form-group
              label="최소:"
              label-for="minArea"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="minArea"
                v-model="minArea"
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="최대:"
              label-for="maxArea"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="maxArea"
                v-model="maxArea"
                type="number"
              ></b-form-input>
            </b-form-group></div
        ></b-tab>
        <b-tab title="층수"
          ><div>
            <b-form-group
              label="최소:"
              label-for="baseFloor"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="baseFloor"
                v-model="baseFloor"
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="최대:"
              label-for="topFloor"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="topFloor"
                v-model="topFloor"
                type="number"
              ></b-form-input>
            </b-form-group></div
        ></b-tab>
        <b-tab title="가격"
          ><div>
            <b-form-group
              label="최저:"
              label-for="minPrice"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="minPrice"
                v-model="minPrice"
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="최고:"
              label-for="maxPrice"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="maxPrice"
                v-model="maxPrice"
                type="number"
              ></b-form-input>
            </b-form-group></div
        ></b-tab>
      </b-tabs>
    </div>

    <b-table striped hover :items="filteredDeals" :fields="fields">
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HouseListRow from "@/components/house/HouseListRow.vue";
import HouseDealAmountChart from "@/components/charts/HouseDealAmountChart.vue";

const houseStore = "houseStore";
export default {
  components: {
    HouseListRow,
    HouseDealAmountChart,
  },
  data() {
    return {
      fields: [
        // { key: "index", label: "번호" },
        { key: "dealDate", label: "거래일", sortable: "true" },
        { key: "area", label: "면적(㎡)", sortable: "true" },
        { key: "floor", label: "층수", sortable: "true" },
        { key: "dealAmount", label: "실거래가(만원)", sortable: "true" },
      ],
      startDate: null,
      endDate: null,
      minArea: null,
      maxArea: null,
      baseFloor: null,
      topFloor: null,
      minPrice: null,
      maxPrice: null,
    };
  },
  computed: {
    ...mapState(houseStore, ["houseDeals", "houseInfo"]),
    filteredDeals() {
      let array = this.processedHouseDeals;
      // 날짜 필터링
      if (this.startDate !== null && this.startDate !== "") {
        array = array.filter((houseDeal) => {
          return new Date(houseDeal.dealDate) > new Date(this.startDate);
        });
      }
      if (this.endDate !== null && this.endDate !== "") {
        array = array.filter((houseDeal) => {
          return new Date(houseDeal.dealDate) < new Date(this.endDate);
        });
      }

      // 면적 필터링
      if (this.minArea !== null && this.minArea !== "") {
        array = array.filter((houseDeal) => {
          return houseDeal.area >= this.minArea;
        });
      }
      if (this.maxArea !== null && this.maxArea !== "") {
        array = array.filter((houseDeal) => {
          return houseDeal.area <= this.maxArea;
        });
      }

      // 층수 필터링
      if (this.baseFloor !== null && this.baseFloor !== "") {
        array = array.filter((houseDeal) => {
          return houseDeal.floor >= this.baseFloor;
        });
      }
      if (this.topFloor !== null && this.topFloor !== "") {
        array = array.filter((houseDeal) => {
          return houseDeal.floor <= this.topFloor;
        });
      }

      // 가격 필터링
      if (this.minPrice !== null && this.minPrice !== "") {
        array = array.filter((houseDeal) => {
          return (
            parseInt(houseDeal.dealAmount.replace(",", "")) >= this.minPrice
          );
        });
      }
      if (this.maxPrice !== null && this.maxPrice !== "") {
        array = array.filter((houseDeal) => {
          return (
            parseInt(houseDeal.dealAmount.replace(",", "")) <= this.maxPrice
          );
        });
      }

      return array;
    },
    processedHouseDeals() {
      let result = [];
      for (let houseDeal of this.houseDeals) {
        result.push({
          dealDate:
            houseDeal.dealYear +
            "." +
            houseDeal.dealMonth +
            "." +
            houseDeal.dealDay,
          area: houseDeal.area,
          floor: houseDeal.floor,
          dealAmount: houseDeal.dealAmount,
        });
      }
      return result;
    },
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
    filter() {
      alert("ji");
    },
  },
};
</script>

<style scoped>
.list {
  height: calc(100vh - 110px);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
