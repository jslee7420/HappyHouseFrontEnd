<template>
  <div>
    <filter-bar></filter-bar>
    <div class="d-flex">
      <house-list></house-list>
      <map-comp></map-comp>
    </div>
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
#clear {
  content: "";

  clear: both;
}
</style>
