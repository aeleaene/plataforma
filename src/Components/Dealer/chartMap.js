import react from "react";
import ReactECharts from 'echarts-for-react';

import './estilos.css';

const ChartMap = () => {
  const options = {
    legend: {
      data: ["Compra", "Usado"]
    },
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['202110', '202111', '202112'],
    },
    yAxis: {
      type: 'value',
    },
    series: [{
        name: "Compra",
        data: [0, 0, 18],
        type: 'bar',
        smooth: true,
        color: "#20A8D8",
        barWidth: 25, 
        },{
        name: "Usado",
        data: [3, 0, 18],
        type: 'bar',
        smooth: true,
        color: "#D53A35",
        barWidth: 25
      },
      
    ],
    tooltip: {
      trigger: 'axis',
    },
    
  };


  return (
   <ReactECharts option={options} />
  );
}

export default ChartMap;