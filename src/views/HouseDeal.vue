<template>
  <div>
    <filter-bar></filter-bar>
    <house-list></house-list>
  </div>
</template>

<script>
import FilterBar from "@/components/house/FilterBar.vue";
import HouseList from "@/components/house/HouseList.vue";

export default {
  components: {
    FilterBar,
    HouseList,
  },
};
</script>

<style scoped></style>
