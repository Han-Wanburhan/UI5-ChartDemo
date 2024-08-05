# com.chartdemo.chartdemoproject

This project is a demonstration of a charting application built in [specify the technology used, e.g., Java, Kotlin, etc.]. It showcases the creation and manipulation of various types of charts for data visualization.

## Table of Contents

- [Using ApexCharts In UI5 ​](#Using-ApexCharts-In-UI5)
- [Custom Chart ](#Custom-Chart)
- [Layout Sap UI5](#Layout-Sap-UI5)
- [Chart With Odata​](#Chart-With-Odata​)

## Using ApexCharts In UI5

1. Clone And Run the repository:

   ```bash
   git clone https://github.com/Han-Wanburhan/UI5-ChartDemo.git
   npm install
   cd .\chartdemo\
   npm start
   ```

2. Add ApexCharts.js CDN Script into Index.html​

   ```
   <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
   ```

3. Add Control in MainView.view.xml

   ```
   xmlns:mvc="sap.ui.core.mvc"
   xmlns="sap.m"
   xmlns:l="sap.ui.layout"
   xmlns:core="sap.ui.core"
   displayBlock="true"
   ```

4. Add Tag MainView.view.xml

   ```
   <core:HTML> </core:HTML>
   ```

5. Add content property in <core:HTML> </core:HTML>
   ```
   content = "&lt;div id=&quot;chart&quot;&gt; Hello Wolrd &lt;/div&gt;"
   ```
6. Add afterRendering property in <core:HTML> </core:HTML>
   ```
   afterRendering = "onRenderApex"
   ```
7. Create onRenderApex Function in MainView.controller.js

   ```
   onRenderApex: function () {
    var options = {
          series: [{
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43, 21, 49]
        }, {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 33, 12]
        }, {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14, 15, 13]
        }],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
            '2012 Q3', '2012 Q4'
          ],
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
   }
   ```

### Custom Chart

1. Change Background Color:

   ```
   background: "#e8d3f2"
   ```

2. Change Chart Color With Theme:

   ```
   theme: {palette: "palette5",},
   ```

3. Change Chart Color With Monochrome:

   ```
    theme: {
   monochrome: {
   enabled: true,color:"#255000",   
   shadeTo: "light",
   shadeIntensity: 0.65,         
   },
   },
   ```

4. Change Custom Chart Color :

```
  colors: [
  "#008FFB",
  "#00E396",
  "#FEB019",
  //สามารถเพิ่มสีเองได้ตามต้องการ
  ],
```

5. Add Data Label :

```
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
```

### Layout Sap UI5

1. Add in <content></content>:

   ```
   <l:Grid
   defaultSpan="L6 M6 S12"
   width="100%">
                <l:content>
                </l:content>
     </l:Grid>
   ```

2. Add in <l:content></l:content>:

   ```
   <VBox width="100%">
    <Text text="Daily Total Feed to Crushing Plant"
        class="myCustomText" />
    <Table id="table" inset="false"
        class="customColumnHeader">
    </Table>
   </VBox >
   ```

3. Add Header Table in <Table></Table>:

   ```
    <columns>
        <Column hAlign="Left" width="auto">
            <Text text="Stone" />
        </Column>
        <Column hAlign="Right">
            <Text text="Daily Plan" />
        </Column>
        <Column hAlign="Left">
            <Text text="Type" />
        </Column>
        <Column hAlign="Right">
            <Text text="Daily" />
        </Column>
        <Column hAlign="Right">
            <Text text="MTD" />
        </Column>
        <Column hAlign="Right">
            <Text text="YTD" />
        </Column>
    </columns>
   ```

### Chart With Odata
