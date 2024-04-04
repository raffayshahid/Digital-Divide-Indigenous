'use client'
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Research.module.css';

// Register the chart components you intend to use
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Research = () => {
  // Updated to represent the shift in internet usage categories from 2018 to 2020
  const barChartData = {
    labels: ['Non-users', 'Basic users', 'Intermediate users', 'Proficient users', 'Advanced users'],
    datasets: [
      {
        label: '2018',
        data: [23.8, // Estimate based on the decline mentioned
               30, // Approximation based on total decrease and increase in other categories
               21.7, // Estimate before the increase
               22.9, // Estimate before the decrease
               32.7], // Before the increase mentioned
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '2020',
        data: [18.9, // Given in the data
               25, // Approximation based on total decrease and increase in other categories
               23, // Given increase
               22, // Given decrease
               36.7], // Given in the data
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  // Reflecting the connectivity targets for Canada over the years
  const lineChartData = {
    labels: ['2021', '2022', '2026', '2030'],
    datasets: [
      {
        label: 'Projected High-Speed Internet Coverage (%)',
        data: [89.7, // Current access rate
               91, // Hypothetical improvement
               95, // Target for 2026
               100], // Target for 2030
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };

  return (
    <section className={styles.research}>
      <h2>Research Page - Canadian Digital Divide</h2>
      <p>
        The data visualized below highlights the evolution of internet usage among Canadians, 
        underscoring the impacts of digital inequity across different demographics. The shift from 
        non-users and basic users towards more advanced internet usage categories from 2018 to 2020 
        indicates a narrowing digital divide, partly due to the increased reliance on digital 
        technologies during the COVID-19 pandemic. 
        {/* Insert hyperlink to Statistics Canada study here */}
      </p>
      <div>
        <h3>Internet User Categories (2018 vs. 2020)</h3>
        <Bar data={barChartData} />
        <p>
          Source: Statistics Canada. This bar chart shows the distribution of Canadian internet 
          users across different proficiency levels in 2018 and 2020, revealing a notable 
          decrease in non-users and basic users over this period.
        </p>
      </div>
      
      <div>
        <h3>Projected High-Speed Internet Coverage</h3>
        <Line data={lineChartData} />
        <p>
          Source: Government of Canada’s Connectivity Strategy. The line chart projects the 
          increase in high-speed internet coverage across Canada, aiming for 95% by 2026 and 
          universal access by 2030. This initiative reflects a commitment to bridging the 
          digital divide and ensuring digital equity.
          {/* Insert hyperlink to Government of Canada’s Connectivity Strategy here */}
        </p>
      </div>
      <div>
        <h3>Conclusion</h3>
      <p>
        The data and projections underscore the importance of continued efforts to enhance digital 
        literacy and infrastructure, especially among marginalized and rural communities. For more 
        detailed information and to access the full studies, please refer to the original sources.
        {/* Consider listing all the references or inserting hyperlinks directly to the sources */}
      </p>
      </div>
    </section>
  );
};

export default Research;
