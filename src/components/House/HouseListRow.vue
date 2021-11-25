<template>
  <div>
    <b-list-group-item
      class="overflow-hidden"
      v-on="{ click: isDetail ? () => {} : showDetail }"
    >
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

          <span
            >{{ address }}<br />건축년도: {{ buildYear }}<br />
            평당가: {{ pricePerPyeong }}만원
          </span>
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
    isDetail: Boolean,
    pricePerPyeong: Number,
  },
  data() {
    return {
      bookmarkInfo: null,
    };
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
      if (this.$store.state.userStore.bookmakrList !== null) {
        for (let bookmark of this.$store.state.userStore.bookmakrList) {
          if (bookmark.aptCode == this.aptCode) {
            this.insertBookmarkInfo(bookmark);
            return true;
          }
        }
      }
      return false;
    },
  },
  methods: {
    showDetail() {
      this.$store.dispatch("houseStore/setHouseInfo", {
        aptCode: this.aptCode,
        aptName: this.aptName,
        dongName: this.dongName,
        sidoName: this.sidoName,
        gugunName: this.gugunName,
        buildYear: this.buildYear,
        jibun: this.jibun,
        recentPrice: this.recentPrice,
      });
      this.$store
        .dispatch("houseStore/getHouseDeals", this.aptCode)
        .then(() => {
          if (this.$route.name === "HouseList")
            this.$router.push({ name: "HouseDetail" });
          else this.$router.push({ name: "BookmarkDetail" });
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
      this.$store.dispatch("userStore/bookmarkDelete", this.bookmarkInfo);
    },
    insertBookmarkInfo(bookmark) {
      this.bookmarkInfo = bookmark;
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
