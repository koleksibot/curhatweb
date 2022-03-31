import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getAverageBreastfeedTime } from '@services/StatisticServices';
// import { getMaxRoleConsultation } from '@services/StatisticServices';

const AverageBreastfeedingTime = () => {
  const AverageBreastfeedTimeQuery = useQuery('averagebreastfeedtime', () => {
    return getAverageBreastfeedTime();
  });

  const data = {
    labels: AverageBreastfeedTimeQuery.data?.payload.label,
    datasets: [
      {
        data: AverageBreastfeedTimeQuery.data?.payload.values,
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(144, 71, 153)'],
        hoverOffset: 4,
        options: { scales: { xAxes: [{ barThickness: 100 }] } },
      },
    ],
  };
  return (
    <>
      <Box p={2}>
        <Typography align="center" variant="h6">
          Waktu Pemberian Asi
        </Typography>
      </Box>
      <div>
        <Bar
          data={data}
          height={100}
          //   width={800}
          options={{
            indexAxis: 'y',
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    </>
  );
};

export default AverageBreastfeedingTime;
