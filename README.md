# com.chartdemo.chartdemoproject

This project is a demonstration of a charting application built in [specify the technology used, e.g., Java, Kotlin, etc.]. It showcases the creation and manipulation of various types of charts for data visualization.

## Table of Contents

- [Using ApexCharts In UI5 ​](#Using-ApexCharts-In-UI5)
- [Custom Chart ](#Custom-Chart)
- [Layout Sap UI5](#Layout-Sap-UI5)
- [Chart With Odata​](#Chart-With-Odata​)

## Using ApexCharts In UI5

### Custom Chart

Ensure you have the following software installed on your machine:

- [Java Development Kit (JDK) 8 or later](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- [Gradle](https://gradle.org/install/) or [Maven](https://maven.apache.org/install.html) (specify the build tool used)
- [Android Studio](https://developer.android.com/studio) (if it's an Android project)

### Layout Sap UI5

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
   content = "&lt;div id=&quot;chart&quot;&gt; Hello Wolrd &lt;/div&gt;"​
   ```

### Usage

To run the application, use the following command:

```bash
./gradlew run
```

### Chart With Odata

Ensure you have the following software installed on your machine:

- [Java Development Kit (JDK) 8 or later](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- [Gradle](https://gradle.org/install/) or [Maven](https://maven.apache.org/install.html) (specify the build tool used)
- [Android Studio](https://developer.android.com/studio) (if it's an Android project)
