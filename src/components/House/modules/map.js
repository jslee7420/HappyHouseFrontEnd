for (let i = 0; i < houses.length; i++) {
  let position = new kakao.maps.LatLng(houses[i].lat, houses[i].lng);
  // LatLngBounds 객체에 좌표를 추가합니다
  bounds.extend(position);

  // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
  let marker = new kakao.maps.Marker({
    map: this.map,
    position,
    clickable: true,
  });
  // 마커에 click 이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", () => {
    this.$store.dispatch("houseStore/getHouseDeals").then(() => {
      this.$router.push({ name: "HouseDetail" });
    });
  });
}
