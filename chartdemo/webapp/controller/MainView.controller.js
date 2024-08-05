sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("chartdemo.controller.MainView", {
      onInit: function () {
        const oData = {
          data: [
            {
              Stone: "Chemical Stone ProductA",
              DailyPlan: 12500,
              Type: "New Blast",
              Daily: 4130.44,
              MTD: 12803.87,
              YTD: 603830.99,
            },
            {
              Stone: "Chemical Stone ProductA",
              DailyPlan: 12500,
              Type: "Scalper",
              Daily: 0.0,
              MTD: 0.0,
              YTD: 0.0,
            },
            {
              Stone: "Total Chemical Stone ProductA",
              DailyPlan: "",

              Type: "",
              Daily: 4130.44,
              MTD: 12803.87,
              YTD: 603830.99,
            },
            {
              Stone: "Chemical Stone ProductB",
              DailyPlan: 15000,
              Type: "New Blast",
              Daily: 0.0,
              MTD: 5663.61,
              YTD: 87565.46,
            },
            {
              Stone: "Chemical Stone ProductB",
              DailyPlan: 15000,
              Type: "Scalper",
              Daily: 0.0,
              MTD: 0.0,
              YTD: 0.0,
            },
            {
              Stone: "Total Chemical Stone ProductB",
              DailyPlan: "",
              Type: "",
              Daily: 0.0,
              MTD: 5663.61,
              YTD: 87565.46,
            },
            {
              Stone: "Construction Stone Production",
              DailyPlan: 15000,
              Type: "New Blast",
              Daily: 851.36,
              MTD: 3069.1,
              YTD: 50227.49,
            },
            {
              Stone: "Construction Stone Production",
              DailyPlan: 15000,
              Type: "Scalper",
              Daily: 0.0,
              MTD: 0.0,
              YTD: 0.0,
            },
            {
              Stone: "Total Construction Stone Production",
              DailyPlan: "",
              Type: "",
              Daily: 851.36,
              MTD: 3069.1,
              YTD: 50227.49,
            },
            // เพิ่มข้อมูลตามต้องการ
          ],
          data2: [
            {
              Product_Size: "G/S (40-95)",
              Meterial_Code: "2CALGS",
              Producer: 2272.82,
              Yield: 50.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
            {
              Product_Size: "SS New (15-40)",
              Meterial_Code: "2CALGS",
              Producer: 2272.82,
              Yield: 10.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
            {
              Product_Size: "SS New (8-15)",
              Meterial_Code: "2CALGS",
              Producer: 2272.82,
              Yield: 10.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
            {
              Product_Size: "Dust (หินฝุ่นคุณภาพ)",
              Meterial_Code: "2CALGS",
              Producer: 2272.82,
              Yield: 10.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
            {
              Product_Size: "Mixed (หินคลุก)",
              Meterial_Code: "2CALGS",
              Producer: 2272.82,
              Yield: 10.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
            {
              Product_Size: "หินใต้สายพาน",
              Meterial_Code: "2CALGS",
              Producer: 2272.82,
              Yield: 10.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
            {
              Product_Size: "Dailly Total Production",
              Meterial_Code: "",
              Producer: 2272.82,
              Yield: 100.0,
              Beginning_Stock: 14403.59,
              Extracted: -2691.81,
              Remaining: 13984.6,
              Max_Stock_Pile: 20000.0,
            },
          ],
        };
        const oModel = new sap.ui.model.json.JSONModel(oData);
        this.getView().setModel(oModel);
        this.formatChartData();
      },

      formatChartData: function () {
        const oModel = this.getView().getModel();
        const oData = oModel.getData();
        const aFilteredData = oData.data2.slice(0, -1);
        const aFormattedData = aFilteredData.map(function (item) {
          return {
            name: item.Product_Size,
            value: parseFloat(item.Yield).toFixed(2),
          };
        });
        oModel.setProperty("/chartData", aFormattedData);
        this.onRenderApex();
      },

      onRenderApex: function () {
        const oChartData = this.getView().getModel().getProperty("/chartData");
        const seriesData = oChartData.map((item) => ({
          name: item.name,
          data: [parseFloat(parseFloat(item.value).toFixed(2))],
        }));
        var options = {
          series: seriesData,
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%",
            background: "#ffffff",
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
            categories: ["2011 Q1"],
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
