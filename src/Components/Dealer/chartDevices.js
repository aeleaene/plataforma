import react from 'react';

import ReactECharts from 'echarts-for-react';

import './estilos.css';

const ChartDevice = () => {
    
    const options = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Total', 'Expirado',]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['202110', '202111', '202112']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Total',
            type: 'line',
            stack: 'Total',
            data: [392, 392, 411],
            color: "#20A8D8",
            
          },
          {
            name: 'Expirado',
            type: 'line',
            stack: 'Expirado',
            data: [339, 340, 360],
            color: "#D53A35",
          },
        ]
      };
    
      return(
        <ReactECharts option={options} />
      );
}

export default ChartDevice;