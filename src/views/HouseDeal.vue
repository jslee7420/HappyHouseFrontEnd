<template>
  <div class="housedeal">
    <filter-bar></filter-bar>
    <div class="d-flex">
      <div class="side border-right item">
        <router-view />
      </div>
      <div class="map item">
        <map-comp></map-comp>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBar from "@/components/house/FilterBar.vue";
import MapComp from "@/components/house/Map.vue";

export default {
  components: {
    FilterBar,
    MapComp,
  },
};
</script>

<style scoped>
.side {
  width: 430px;
}
.map {
  flex: 1;
}
</style>
