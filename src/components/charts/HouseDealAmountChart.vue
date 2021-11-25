<script>
//Importing Line class from the vue-chartjs wrapper
import { Scatter } from "vue-chartjs";
import { mapState } from "vuex";

const houseStore = "houseStore";
//Exporting this so it can be used in other components
export default {
  extends: Scatter,
  data() {
    return {
      datacollection: null,
      //Chart.js options that controls the appearance of the chart
      options: {
        //Chart.js options that controls the appearance of the chart
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              type: "time",
              distribution: "linear",
              time: {
                unit: "month",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapState(houseStore, ["houseDeals"]),
  },
  created() {
    this.houseDeals.forEach((houseDeal) => {
      houseDeal.x = `${houseDeal.dealYear}.${houseDeal.dealMonth}`;
      // houseDeal.dealAmount = parseInt(
      //   houseDeal.dealAmount.replace(/, /g, ""),
      //   10
      // );
      houseDeal.y = parseInt(houseDeal.dealAmount, 10);
    });
    console.log(this.houseDeals);
  },
  mounted() {
    this.fillData();
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  },
  methods: {
    fillData() {
      this.datacollection = {
        //Data to be represented on x-axis
        labels: [
          "2019.1",
          "2019.2",
          "2019.3",
          "2019.4",
          "2019.5",
          "2019.6",
          "2019.7",
          "2019.8",
          "2019.9",
          "2019.10",
          "2019.11",
          "2019.12",
        ],
        datasets: [
          {
            label: "실거래가 (천만원)",
            // backgroundColor: "#f87979",
            fill: false,
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            //Data to be represented on y-axis
            data: this.houseDeals,
            showLine: true,
          },
        ],
      };
    },
  },
};
</script>
