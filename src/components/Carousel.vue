<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2500"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; font-weight: bold"
      @sliding-start="onSlideStart"
    >
      <b-carousel-slide :img-src="require('@/assets/img/house1.jpg')">
        <h1>손쉬운 주택 실거래가 정보 조회</h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/img/house2.jpg')">
        <h1>손쉬운 주택 실거래가 정보 조회</h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/img/house3.jpg')">
        <h1>손쉬운 주택 실거래가 정보 조회</h1>
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/img/house4.jpg')">
        <h1>손쉬운 주택 실거래가 정보 조회</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped></style>
