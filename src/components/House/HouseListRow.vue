<template>
  <div>
    <b-list-group-item class="overflow-hidden" @click="showDetail">
      <b-row no-gutters>
        <b-col md="4" class="d-flex justify-content-center align-items-center">
          <div class="img-container">
            <b-img
              :src="require('@/assets/img/apartment.jpg')"
              class="fit"
            ></b-img>
          </div>
        </b-col>
        <b-col md="8" class="text-left pl-3">
          <div class="d-flex justify-content-between">
            <span class="font-weight-bold h5">{{ aptName }}</span>

            <b-icon-star-fill
              v-if="isBookmarked"
              class="bookmarkIcon"
              @click.stop="removeFromBookmark"
            />
            <b-icon-star
              v-else
              class="bookmarkIcon"
              @click.stop="addToBookmark"
            />
          </div>

          최근 거래가: <span class="h5 font-weight-bold">{{ price }}</span
          ><br />

          <span>{{ address }}<br />건축년도: {{ buildYear }} </span>
        </b-col>
      </b-row>
    </b-list-group-item>
  </div>
</template>

<script>
import { mapState } from "vuex";

const houseStore = "houseStore";

export default {
  props: {
    aptCode: String,
    aptName: String,
    dongName: String,
    sidoName: String,
    gugunName: String,
    buildYear: Number,
    jibun: String,
    recentPrice: String,
  },
  computed: {
    ...mapState(houseStore, ["isList"]),
    address() {
      return `${this.sidoName} ${this.gugunName} ${this.dongName} ${this.jibun}`;
    },
    price() {
      if (this.recentPrice === null) return "정보없음";
      let priceInNumber = parseInt(this.recentPrice.replace(",", ""));
      let hundredMillion = Math.floor(priceInNumber / 10000);
      let thousand = Math.floor((priceInNumber % 10000) / 1000);
      if (thousand === 0) return `${hundredMillion}억 `;
      else return `${hundredMillion}억 ${thousand}천`;
    },
    isBookmarked() {
      for (let house of this.$store.state.userStore.bookmakrList) {
        if (house.aptCode == this.aptCode) return true;
      }
      return false;
    },
  },
  methods: {
    showDetail() {
      this.$store
        .dispatch("houseStore/getHouseDeals", this.aptCode)
        .then(() => {
          this.$router.push({ name: "HouseDetail" });
        });
    },
    addToBookmark() {
      let bookMark = {
        userId: this.$store.getters["userStore/checkUserInfo"].userId,
        aptCode: this.aptCode,
      };
      this.$store.dispatch("userStore/bookmarkAdd", bookMark);
    },
    removeFromBookmark() {
      let bookMark = {
        userId: this.$store.getters["userStore/checkUserInfo"].userId,
        aptCode: this.aptCode,
      };
      this.$store.dispatch("userStore/bookmarkDelete", bookMark);
    },
  },
};
</script>

<style scoped>
.fit {
  width: 120px;
  height: 120px;
}
.bookmarkIcon:hover {
  cursor: pointer;
}
</style>
