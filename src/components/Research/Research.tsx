'use client'
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Research.module.css';

// Register the chart components you intend to use
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Research = () => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bar Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Line Dataset',
        data: [85, 69, 90, 91, 76, 65, 80],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };

  return (
    <section className={styles.research}>
      <h2>Research Page</h2>
      <div>
        <h3>Bar Chart</h3>
        <Bar data={barChartData} />
        <h3>Line Chart</h3>
        <Line data={lineChartData} />
      </div>
    </section>
  );
};

export default Research;
