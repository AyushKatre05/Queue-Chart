"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent: React.FC = () => {
  // Static dataset with 150 records, each y-value is a static value between 1 and 100
  const staticData = [
    { x: 1, y: 34 }, { x: 2, y: 52 }, { x: 3, y: 61 }, { x: 4, y: 89 }, { x: 5, y: 47 },
    { x: 6, y: 73 }, { x: 7, y: 92 }, { x: 8, y: 45 }, { x: 9, y: 67 }, { x: 10, y: 81 },
    { x: 11, y: 53 }, { x: 12, y: 65 }, { x: 13, y: 84 }, { x: 14, y: 29 }, { x: 15, y: 56 },
    { x: 16, y: 97 }, { x: 17, y: 61 }, { x: 18, y: 85 }, { x: 19, y: 43 }, { x: 20, y: 75 },
    { x: 21, y: 33 }, { x: 22, y: 50 }, { x: 23, y: 71 }, { x: 24, y: 79 }, { x: 25, y: 67 },
    { x: 26, y: 99 }, { x: 27, y: 23 }, { x: 28, y: 45 }, { x: 29, y: 60 }, { x: 30, y: 55 },
    { x: 31, y: 77 }, { x: 32, y: 62 }, { x: 33, y: 49 }, { x: 34, y: 86 }, { x: 35, y: 68 },
    { x: 36, y: 53 }, { x: 37, y: 42 }, { x: 38, y: 90 }, { x: 39, y: 66 }, { x: 40, y: 56 },
    { x: 41, y: 84 }, { x: 42, y: 88 }, { x: 43, y: 77 }, { x: 44, y: 69 }, { x: 45, y: 72 },
    { x: 46, y: 92 }, { x: 47, y: 74 }, { x: 48, y: 41 }, { x: 49, y: 62 }, { x: 50, y: 83 },
    { x: 51, y: 57 }, { x: 52, y: 71 }, { x: 53, y: 63 }, { x: 54, y: 70 }, { x: 55, y: 66 },
    { x: 56, y: 78 }, { x: 57, y: 91 }, { x: 58, y: 85 }, { x: 59, y: 64 }, { x: 60, y: 69 },
    { x: 61, y: 74 }, { x: 62, y: 50 }, { x: 63, y: 88 }, { x: 64, y: 59 }, { x: 65, y: 66 },
    { x: 66, y: 84 }, { x: 67, y: 56 }, { x: 68, y: 42 }, { x: 69, y: 79 }, { x: 70, y: 92 },
    { x: 71, y: 58 }, { x: 72, y: 47 }, { x: 73, y: 62 }, { x: 74, y: 53 }, { x: 75, y: 75 },
    { x: 76, y: 79 }, { x: 77, y: 89 }, { x: 78, y: 70 }, { x: 79, y: 91 }, { x: 80, y: 59 },
    { x: 81, y: 81 }, { x: 82, y: 66 }, { x: 83, y: 54 }, { x: 84, y: 63 }, { x: 85, y: 73 },
    { x: 86, y: 40 }, { x: 87, y: 60 }, { x: 88, y: 48 }, { x: 89, y: 67 }, { x: 90, y: 92 },
    { x: 91, y: 53 }, { x: 92, y: 68 }, { x: 93, y: 70 }, { x: 94, y: 64 }, { x: 95, y: 62 },
    { x: 96, y: 44 }, { x: 97, y: 80 }, { x: 98, y: 52 }, { x: 99, y: 91 }, { x: 100, y: 87 },
    { x: 101, y: 61 }, { x: 102, y: 94 }, { x: 103, y: 72 }, { x: 104, y: 67 }, { x: 105, y: 76 },
    { x: 106, y: 69 }, { x: 107, y: 59 }, { x: 108, y: 64 }, { x: 109, y: 82 }, { x: 110, y: 56 },
    { x: 111, y: 73 }, { x: 112, y: 65 }, { x: 113, y: 40 }, { x: 114, y: 53 }, { x: 115, y: 88 },
    { x: 116, y: 78 }, { x: 117, y: 92 }, { x: 118, y: 80 }, { x: 119, y: 58 }, { x: 120, y: 71 },
    { x: 121, y: 93 }, { x: 122, y: 50 }, { x: 123, y: 63 }, { x: 124, y: 47 }, { x: 125, y: 84 },
    { x: 126, y: 65 }, { x: 127, y: 81 }, { x: 128, y: 70 }, { x: 129, y: 69 }, { x: 130, y: 85 },
    { x: 131, y: 66 }, { x: 132, y: 44 }, { x: 133, y: 92 }, { x: 134, y: 51 }, { x: 135, y: 47 },
    { x: 136, y: 55 }, { x: 137, y: 83 }, { x: 138, y: 63 }, { x: 139, y: 59 }, { x: 140, y: 88 },
    { x: 141, y: 71 }, { x: 142, y: 78 }, { x: 143, y: 60 }, { x: 144, y: 53 }, { x: 145, y: 79 },
    { x: 146, y: 67 }, { x: 147, y: 65 }, { x: 148, y: 90 }, { x: 149, y: 80 }, { x: 150, y: 71 },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const recordsPerPage = 30;  // Show 30 records at once

  // Get the data for the current page (showing 30 records at a time)
  const getCurrentData = () => {
    const startIdx = currentPage;
    const endIdx = currentPage + recordsPerPage;
    return staticData.slice(startIdx, endIdx); // Slice out 30 records
  };

  // Chart Data and Labels
  const chartData: ChartData<"bar"> = {
    labels: getCurrentData().map((d) => `Label ${d.x}`), // X-axis labels
    datasets: [
      {
        label: "Static Data",
        data: getCurrentData().map((d) => d.y), // Get 30 data points for the graph
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 500, // Smooth transition
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: { beginAtZero: true },
    },
  };

  // Pagination controls
  const handlePagination = (direction: "next" | "previous") => {
    setCurrentPage((prev) =>
      direction === "next"
        ? Math.min(prev + 1, staticData.length - recordsPerPage)  // Ensure we don't go beyond the last page
        : Math.max(prev - 1, 0)  // Ensure we don't go before the first page
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="h-80">
        <Bar data={chartData} options={options} />
      </div>

      {/* Pagination controls */}
      <div className="mt-4 flex gap-2 justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handlePagination("previous")}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handlePagination("next")}
          disabled={currentPage === staticData.length - recordsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChartComponent;
