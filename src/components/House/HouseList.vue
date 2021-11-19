<template>
  <div class="side_bar">
    <div class="font-weight-bold p-2">전체 주택 {{ houses.length }}개</div>
    <b-card-group>
      <b-card class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img
              :src="require('@/assets/img/apartment.jpg')"
              class="fit"
            ></b-card-img>
          </b-col>
          <b-col md="7" class="text-left">
            <b-card-body title="e편한 세상" sub-title="경기도 성남시 분당구">
              <b-card-text>
                준공일: 2010.10 <br /><span class="font-weight-bold"
                  >최근 거래액: <span class="h4">10억</span></span
                >
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
const houseStore = "houseStore";
export default {
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
};
</script>

<style scoped>
.side_bar {
  width: 450px;

  overflow: scroll;
  overflow-x: hidden;
}

.fit {
  width: 100%;
  height: 100%;
}
</style>
