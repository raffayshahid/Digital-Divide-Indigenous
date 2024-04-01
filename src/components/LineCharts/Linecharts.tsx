import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components you want to use
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartComponentProps {
  data: any;
}

const ChartComponent: FC<ChartComponentProps> = ({ data }) => {
  return <Bar data={data} />;
};

export default ChartComponent;
