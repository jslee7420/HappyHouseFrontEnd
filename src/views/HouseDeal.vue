<template>
  <div id="houseDeal">
    <filter-bar></filter-bar>
    <house-list></house-list>
    <map-comp></map-comp>
  </div>
</template>

<script>
import FilterBar from "@/components/house/FilterBar.vue";
import HouseList from "@/components/house/HouseList.vue";
import MapComp from "@/components/house/Map.vue";

export default {
  components: {
    FilterBar,
    HouseList,
    MapComp,
  },
};
</script>

<style scoped>
#houseDeal {
  content: "";

  clear: both;
}
</style>
