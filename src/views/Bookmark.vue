<template>
  <div class="housedeal">
    <filter-bar class="doNotShow"></filter-bar>
    <div class="d-flex border-top">
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
  created() {
    this.$store.dispatch("houseStore/resetHouses");
  },
};
</script>

<style scoped>
.side {
  width: 400px;
}
.map {
  flex: 1;
}
.doNotShow {
  visibility: hidden;
}
</style>
