import React from "react";
import Chart from "react-apexcharts";

export default function DisplayRadial({percent,lbl}) {
    
  const series = [percent]; 
  const options = {
    chart: {
      height: 40
    },
    labels: [lbl]
  };
  return (
    <Chart className='radialChart' type="radialBar" series={series} options={options} width={200} />
  );
}
