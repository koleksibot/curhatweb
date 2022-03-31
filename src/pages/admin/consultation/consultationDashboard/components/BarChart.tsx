import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getMaxRoleConsultation } from '@services/StatisticServices';

const BarChartConsultation = () => {
  const maxRoleQuery = useQuery('maxroleconsultation', () => {
    return getMaxRoleConsultation();
  });

  const data = {
    labels: maxRoleQuery.data?.payload.label,
    datasets: [
      {
        data: maxRoleQuery.data?.payload.values,
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(144, 71, 153)'],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Box p={2}>
        <Typography align="center" variant="h5">
          Tahap Akhir Konsultasi
        </Typography>
      </Box>
      <div>
        <Bar
          data={data}
          height={200}
          width={800}
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

export default BarChartConsultation;
