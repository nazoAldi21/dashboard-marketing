import React, { useState } from "react";

interface EarningsData {
  totalSales: string;
  totalOrders: string;
}

const EarningsChart:React.FC = () => {
  const [timePeriod, setTimePeriod] = useState("lastWeek");

  const handleTimePeriodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTimePeriod(event.target.value);
  };

  interface EarningChart {
    totalSales: string;
    totalOrders: string;
}

  const earningsData: Record<string, EarningsData> = {
    lastWeek: {
      totalSales: "251k",
      totalOrders: "175k",
    },
    twoWeeks: {
      totalSales: "165k",
      totalOrders: "147k",
    },
  };

  const selectedData = earningsData[timePeriod];

  return (
    <div className="w-72 mr-4 bg-tertiaryblue flex flex-col items-start p-5 rounded-lg">
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-white text-base font-medium leading-7 mb-3">
          Earnings
        </h2>
        <label>
          <select
            value={timePeriod}
            onChange={handleTimePeriodChange}
            className="bg-transparent rounded-tl-md rounded-tr-md justify-start items-start gap-2.5 inline-flex text-slate-500 text-xs font-normal leading-none"
          >
            <option
              value="lastWeek"
              className="opacity-90 text-white text-sm font-medium leading-tight"
            >
              Last Week
            </option>
            <option
              value="twoWeeks"
              className="opacity-90 text-white text-sm font-medium leading-tight"
            >
              Two Weeks
            </option>
          </select>
        </label>
      </div>
      <div className="flex flex-row justify-between w-full">
        <svg width="70%" height="100%">
          <circle
            r="54.3603"
            cx="30%"
            cy="47%"
            fill="transparent"
            stroke="#0BB885"
            strokeWidth="8"
            strokeDasharray={`${
              (parseInt(selectedData.totalSales) / 200) * 251
            } 251`}
            transform="rotate(-90) translate(-120)"
            stroke-linecap="round"
          />
          <circle
            r="40"
            cx="30%"
            cy="47%"
            fill="transparent"
            stroke="#FF814A"
            strokeWidth="8"
            strokeDasharray={`${
              (parseInt(selectedData.totalOrders) / 300) * 251
            } 251`}
            transform="rotate(-90) translate(-120)"
            stroke-linecap="round"
          />
        </svg>
        <div className="flex flex-col justify-center">
          <p className="flex flex-col text-white text-xs font-normal leading-tight mb-4">
            Total Sales {timePeriod === "lastWeek"}
            <span className="text-gray-400 text-sm font-medium leading-normal pt-1.5">
              {selectedData.totalSales}
            </span>
          </p>
          <p className="flex flex-col text-white text-xs font-normal leading-tight">
            Total Orders {timePeriod === "lastWeek"}
            <span className="text-gray-400 text-sm font-medium leading-normal pt-1.5">
              {selectedData.totalOrders}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
