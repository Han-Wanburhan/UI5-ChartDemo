sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("chartdemo.controller.MainView", {
      onInit: function () {},
      onRenderApex: function () {
        var options = {
          series: [
            {
              name: "G/S (40-95)",
              data: [40],
            },
            {
              name: "SS New (15-40)",
              data: [10],
            },
            {
              name: "SS New (8-15)",
              data: [10],
            },
            {
              name: "Dust (หินฝุ่นคุณภาพ)",
              data: [10],
            },
            {
              name: "Mixed (หินคลุก)",
              data: [10],
            },
            {
              name: "หินใต้สายพาน",
              data: [10],
            },
          ],
          chart: {
            background: "#ffffff ",
            type: "bar",
            height: 385,
            width: "100%",
            stacked: true,
            stackType: "100%",
          },

          dataLabels: {
            enabled: true,
            style: {
              colors: ["#ffffff"],
            },
            formatter: function (val, opts) {
              const seriesIndex = opts.seriesIndex;
              const dataIndex = opts.dataPointIndex;
              console.log(options.series[seriesIndex].name);
              return (
                opts.w.globals.seriesNames[seriesIndex] +
                ": " +
                options.series[seriesIndex].data[dataIndex].toFixed(2) +
                "%"
              );
            },
          },
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#546E7A",
            "#26a69a",
            "#d4e157",
            "#f44336",
            "#ab47bc",
            "#ff7043",
            "#8d6e63",
            "#78909c",
            "#ec407a",
            "#7e57c2",
          ],
          // theme: {
          // palette: "palette1",},
          // theme: {
          //   monochrome: {
          //     enabled: true,
          //     color: "#255000",
          //     shadeTo: "light",
          //     shadeIntensity: 0.65,
          //   },
          // },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          xaxis: {
            categories: ["% Yield"],
          },
          fill: {
            opacity: 1,
          },
          legend: {
            position: "right",
            offsetX: 0,
            offsetY: 50,
          },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      },
    });
  }
);
