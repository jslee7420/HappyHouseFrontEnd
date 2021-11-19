<template>
  <div>
    <b-list-group-item class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="4" class="d-flex justify-content-center align-items-center">
          <div class="img-container">
            <b-img
              :src="require('@/assets/img/apartment.jpg')"
              class="fit"
            ></b-img>
          </div>
        </b-col>
        <b-col md="8" class="text-left">
          <h4 class="font-weight-bold">{{ aptName }}</h4>
          <p class="font-weight-bold">
            최근 거래가: <span class="h5 font-weight-bold">{{ price }}</span>
          </p>
          <span>{{ address }}<br />건축년도: {{ buildYear }} </span>
        </b-col>
      </b-row>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  props: {
    aptName: String,
    dongName: String,
    sidoName: String,
    gugunName: String,
    buildYear: Number,
    jibun: String,
    recentPrice: String,
  },
  computed: {
    address() {
      return `${this.sidoName} ${this.gugunName} ${this.dongName} ${this.jibun}`;
    },
    price() {
      let priceInNumber = parseInt(this.recentPrice.replace(",", ""));
      let hundredMillion = Math.floor(priceInNumber / 10000);
      let thousand = Math.floor((priceInNumber % 10000) / 1000);
      if (thousand === 0) return `${hundredMillion}억 `;
      else return `${hundredMillion}억 ${thousand}천`;
    },
  },
};
</script>

<style scoped>
.fit {
  width: 120px;
  height: 120px;
}
</style>
