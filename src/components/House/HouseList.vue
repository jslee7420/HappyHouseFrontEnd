<template>
  <div class="side_bar border-right float-left">
    <div class="font-weight-bold p-2">전체 주택 {{ houses.length }}개</div>
    <b-list-group class="list">
      <house-list-row
        v-for="(house, index) of houses"
        :key="index"
        v-bind="house"
      ></house-list-row>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HouseListRow from "@/components/house/HouseListRow.vue";

const houseStore = "houseStore";
export default {
  components: {
    HouseListRow,
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
};
</script>

<style scoped>
.side_bar {
  width: 450px;
}

.list {
  height: calc(100vh - 150px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
