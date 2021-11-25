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

    <!--  -->
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
    />

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
import HouseListRow from "@/components/house/HouseListRow.vue";

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
    ...mapState(houseStore, ["houseDeals", "houseInfo"]),
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
  components: {
    HouseListRow,
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
