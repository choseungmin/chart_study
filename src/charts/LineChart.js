import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {areaChartDown, areaChartUp} from "../defaultCharts/areaChart";

const LineChart = () => {

  return (
    <div style={{width: '300px', height: '100px'}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={areaChartUp}
        containerProps={{ style: { width: '300px', height: "100px" } }}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={areaChartDown}
        containerProps={{ style: { width: '300px', height: "100px" } }}
      />
    </div>

  );
};

export default LineChart;