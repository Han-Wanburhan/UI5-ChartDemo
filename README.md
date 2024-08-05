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

1. Add in `<content></content>`:

   ```
   <l:Grid
   defaultSpan="L6 M6 S12"
   width="100%">
                <l:content>
                </l:content>
     </l:Grid>
   ```

2. Add in `<l:content></l:content>`:

   ```
   <VBox width="100%">
    <Text text="Daily Total Feed to Crushing Plant"
        class="myCustomText" />
    <Table id="table" inset="false"
        class="customColumnHeader">
    </Table>
   </VBox >
   ```

3. Add Header Table in `<Table></Table>`:

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

4. Add Data in `<Table></Table>`

```
    <items>
        <ColumnListItem>
            <cells>
                <Text text="Chemical Stone ProductA" />
                <Text text="12,500.00"/>
                <Text text="New Blast" />
                <Text text="4,130.44"/>
                <Text text="12,803.87 "/>
                <Text text="603,830.99"/>
            </cells>
        </ColumnListItem>
    </items>
```

5. Create Text And Chart `<l:content></l:content>`

```
    <VBox width="100%">
        <Text text="Chemical Stone % Yield"
            class="myCustomText"/>
        <core:HTML afterRendering="onRenderApex"
            content="&lt;div id=&quot;chart&quot;&gt;
            Hello Wolrd &lt;/div&gt;"/>
    </VBox>
```

6. Create Text And Table `<content></content>`

```
    <l:Grid defaultSpan="L12 M12 S12"
        width="100%">
        <l:content>
            <VBox width="100%">
                <Text text="Daily Total Feed to Crushing Plant"
                    class="myCustomText" />
                <Table id="table" inset="false"
                    class="customColumnHeader">
                </Table>
            </VBox >
        </l:content>
    </l:Grid>
```

7. Add Header Table `<Table></Table>`

```
<columns>
    <Column hAlign="Left">
        <Text text="Product Size" />
    </Column>
    <Column hAlign="Left">
        <Text text="Meterial Code" />
    </Column>
    <Column hAlign="Right">
        <Text text="Producer (Tons)" />
    </Column>
    <Column hAlign="Right">
        <Text text="%Yield" />
    </Column>
    <Column hAlign="Right">
        <Text text="Beginning Stock (Tons)" />
    </Column>
    <Column hAlign="Right">
        <Text text="Extracted (Tons)" />
    </Column>
    <Column hAlign="Right">
        <Text text="Remaining (Tons)" />
    </Column>
    <Column hAlign="Right">
        <Text text="Max Stock Pile (Tons)" />
    </Column>
</columns>
```

8. Add Data in `<Table></Table>`

```
<items>
    <ColumnListItem>
        <cells>
            <Text text="G/S (40-95)" />
            <Text text="2CALGS" />
            <Text text="2,272.82    " />
            <Text text="50.00   " />
            <Text text="14,403.59   " />
            <Text text="-2,691.81   " />
            <Text text="13,984.60   " />
            <Text text="20,000.00" />
        </cells>
    </ColumnListItem>
</items>
```

9. Edit CSS

```
.customColumnHeader table thead tr th {
    background-color: #4caf50; /* เปลี่ยนสีตามต้องการ */
    color: white; /* สีข้อความ */
}
.customColumnHeader table thead tr th span {
    color: white !important;
}
.myCustomText {
    font-size: 20px; /* ขนาดฟอนต์ที่คุณต้องการ */
    font-weight: bold; /* น้ำหนักฟอนต์ */
}
#chart {
    max-width: 920px !important;
    width: 100% !important;
    border: 1px solid #333;

}
```

### Chart With Odata

1. Create Odata

```
const oData = {
data: [{ Stone: "Chemical Stone ProductA“ DailyPlan: 12500, Type: "New Blast", Daily: 4130.44, MTD: 12803.87, YTD: 603830.99, },
    {Stone: "Chemical Stone ProductA",DailyPlan: 12500,Type: "Scalper",Daily: 0.0,MTD: 0.0,YTD: 0.0,},
    {Stone: "Total Chemical Stone ProductA",DailyPlan: "",Type: "",Daily: 4130.44,MTD: 12803.87,YTD: 603830.99,},
    {Stone: "Chemical Stone ProductB",DailyPlan: 15000,Type: "New Blast",Daily: 0.0,MTD: 5663.61,YTD: 87565.46,},
    {Stone: "Chemical Stone ProductB",DailyPlan: 15000,Type: "Scalper",Daily: 0.0,MTD: 0.0,YTD: 0.0,},
    {Stone: "Total Chemical Stone ProductB",DailyPlan: "",Type: "",Daily: 0.0,MTD: 5663.61,YTD: 87565.46,},
    {Stone: "Construction Stone Production",DailyPlan: 15000,Type: "New Blast",Daily: 851.36,MTD: 3069.1,YTD: 50227.49,},
    {Stone: "Construction Stone Production",DailyPlan: 15000,Type: "Scalper",Daily: 0.0,MTD: 0.0,YTD: 0.0,},
    {Stone: "Total Construction Stone Production",DailyPlan: "",Type: "",Daily: 851.36,MTD: 3069.1,YTD: 50227.49,},
// เพิ่มข้อมูลตามต้องการ
],
data2: [
    {Product_Size: "G/S (40-95)",Meterial_Code: "2CALGS",Producer: 2272.82,Yield: 50.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,
    Max_Stock_Pile: 20000.0,},
    {Product_Size: "SS New (15-40)",Meterial_Code: "2CALGS",Producer: 2272.82,Yield: 10.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,Max_Stock_Pile: 20000.0,},
    {Product_Size: "SS New (8-15)",Meterial_Code: "2CALGS",Producer: 2272.82,Yield: 10.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,Max_Stock_Pile: 20000.0,},
    {Product_Size: "Dust (หินฝุ่นคุณภาพ)",Meterial_Code: "2CALGS",Producer: 2272.82,Yield: 10.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,Max_Stock_Pile: 20000.0,},
    { Product_Size: "Mixed (หินคลุก)",Meterial_Code: "2CALGS",Producer: 2272.82,Yield: 10.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,Max_Stock_Pile: 20000.0,},
    {Product_Size: "หินใต้สายพาน",Meterial_Code: "2CALGS",Producer: 2272.82,Yield: 10.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,Max_Stock_Pile: 20000.0,},
    {Product_Size: "Dailly Total Production",Meterial_Code: "",Producer: 2272.82,Yield: 100.0,Beginning_Stock: 14403.59,Extracted: -2691.81,Remaining: 13984.6,Max_Stock_Pile: 20000.0,},],};
const oModel = new sap.ui.model.json.JSONModel(oData);
this.getView().setModel(oModel);
```

2. Add formatChartData function () {}

```
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
```

3. Call formatChartData() in onInit

```
this.formatChartData()
```

4. Delete Static Data Use Data From Odata

```
const oChartData = this.getView().getModel().getProperty("/chartData");
const seriesData = oChartData.map((item) => ({
    name: item.name,
    data: [parseFloat(parseFloat(item.value).toFixed(2))],
    }));
```

5. Select Data

```
series: seriesData,
```

6. Add Property items in Table

```
items="{/data}"
```

7. Change Table Text

```
<Text text="{Stone}" />
<Text text="{path: 'DailyPlan', type: 'sap.ui.model.type.Float', formatOptions: { decimals: 2, preserveDecimals: false}}"/>
<Text text="{Type}" />
<Text text="{path: 'Daily', type: 'sap.ui.model.type.Float', formatOptions: { decimals: 2, preserveDecimals: false}}"/>
<Text text="{path: 'MTD', type: 'sap.ui.model.type.Float', formatOptions: { decimals: 2, preserveDecimals: false}}"/>
<Text text="{path: 'YTD', type: 'sap.ui.model.type.Float', formatOptions: { decimals: 2, preserveDecimals: false}}"/>
```
