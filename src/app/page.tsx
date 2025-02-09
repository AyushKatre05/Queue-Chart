"use client";

import React, { useState, useRef } from "react";
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
  // Initial dummy dataset (20 values, but only last 10 are shown)
  const dummyData = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 15 },
    { x: 4, y: 30 },
    { x: 5, y: 25 },
    { x: 6, y: 18 },
    { x: 7, y: 35 },
    { x: 8, y: 40 },
    { x: 9, y: 22 },
    { x: 10, y: 28 }
  ];

  const [dataPoints, setDataPoints] = useState(dummyData.slice(-10)); // Start with last 10 values
  const [newValue, setNewValue] = useState("");
  const chartRef = useRef<any>(null);

  const addData = () => {
    if (!newValue || isNaN(Number(newValue))) return;

    const newPoint = { x: dataPoints[dataPoints.length - 1].x + 1, y: Number(newValue) };

    // Keep only the last 10 points (remove the first one when adding a new one)
    setDataPoints((prev) => [...prev.slice(1), newPoint]);

    setNewValue("");
  };

  // Chart Data: Always show the last 10 values
  const chartData: ChartData<"bar"> = {
    labels: dataPoints.map((d) => `Label ${d.x}`), // X-axis labels
    datasets: [
      {
        label: "Sliding Data",
        data: dataPoints.map((d) => d.y),
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

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="h-80">
        <Bar ref={chartRef} data={chartData} options={options} />
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="number"
          className="border p-2 text-black w-full rounded"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button className="bg-blue-500 text-black px-4 py-2 rounded" onClick={addData}>
          Add Data
        </button>
      </div>
    </div>
  );
};

export default ChartComponent;
