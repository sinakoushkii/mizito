import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getNavbarBackground } from "./Navbar";

export const DonutChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              maxWidth: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-full h-[100px] pb-10" id="chart">
      <p
        className={`w-full px-2 py-1 ${getNavbarBackground()} text-white text-[13px]`}
      >
        میزان فعالیت شما
      </p>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={250}
      />
    </div>
  );
};
