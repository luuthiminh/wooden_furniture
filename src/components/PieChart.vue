<template>
  <div class="pieChart">
    <canvas id="pieChart" aria-label="Hello ARIA World" role="img"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  data() {
    return {};
  },
  mounted() {
    const pie = document.getElementById("pieChart");
    const pieChart = new Chart(pie, {
      type: "polarArea",
      data: {
        labels: ["Sofa", "Bed", "Clock", "Shelves", "Wardrobe", "Altar"],
        datasets: [
          {
            data: [1000, 550, 600, 700, 800, 900],
            backgroundColor: [
              "rgb(242, 230, 215)",
              "rgb(229, 190, 139)",
              "rgb(206, 150, 76)",
              "rgb(173, 125, 62)",
              "rgb(170, 110, 30)",
              "rgb(117, 79, 29)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: 0,
              },
            },
          },
        },
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });
    // const pie = document.getElementById("pieChart");
    // const pieChart = new Chart(pie, {
    //   title: "Furniture Dashboard",
    //   type: "doughnut",
    //   data: {
    //     labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    //     datasets: [
    //       {
    //         data: [40, 30, 10, 30, 50, 40],
    //         backgroundColor: [
    //           "rgb(242, 230, 215)",
    //           "rgb(229, 190, 139)",
    //           "rgb(206, 150, 76)",
    //           "rgb(173, 125, 62)",
    //           "rgb(170, 110, 30)",
    //           "rgb(117, 79, 29)",
    //         ],
    //       },
    //     ],
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: "bottom",
    //         labels: {
    //           font: {
    //             size: 0,
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    pieChart;
  },
};
</script>

<style scoped>
.pieChart {
  width: 230px;
  height: 230px;
  margin-top: -10px;
  margin-left: -40px;
}
</style>
