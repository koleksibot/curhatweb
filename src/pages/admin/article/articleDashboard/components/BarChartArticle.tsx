import { Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useQuery } from 'react-query';
import { getRatesperPoint } from '@services/StatisticServices';

const BarChartArticle = () => {
  const RateperPointQuery = useQuery('rateperpoint', () => {
    return getRatesperPoint();
  });

  const data = {
    labels: RateperPointQuery.data?.payload.label,
    datasets: [
      {
        data: RateperPointQuery.data?.payload.values,
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(144, 71, 153)'],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Box p={2}>
        <Typography align="center" variant="h5">
          Nilai Rating Keseluruhan
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

export default BarChartArticle;
