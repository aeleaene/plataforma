import react from "react";
import ReactECharts from 'echarts-for-react';

import './estilos.css';

const TypeChart = () => {
    const options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          bottom: 'bottom'
        },
        series: [
          {
            name: 'Access From', 
            type: 'pie',
            label:{
               show: false,
              labelLine: {
                show: false
            },
            },
            radius: '75%',
            data: [
              { value: 373, name: 'GPS303-F' },
              { value: 14, name: 'GPS103-A' },
              { value: 13, name: 'GPS103-B' },
              { value: 3, name: 'GPS303' },
              { value: 2, name: 'TK103' },
              { value: 3, name: 'Otro'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      return(
          <ReactECharts option={options} />
      );
}

export default TypeChart;