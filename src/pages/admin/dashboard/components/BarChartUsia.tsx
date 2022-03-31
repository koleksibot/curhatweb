import { Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getUserbyAge } from '@services/StatisticServices';
import { useQuery } from 'react-query';

const DoughnutChart = (props: any) => {
  const userByAgeQuery = useQuery('userByAge', () => {
    return getUserbyAge(props.user);
  });

  const data = {
    labels: userByAgeQuery.data?.payload.label,
    datasets: [
      {
        data: userByAgeQuery.data?.payload.values,
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(144, 71, 153)'],
        hoverOffset: 4,
      },
    ],
  };

  let groupName;

  if (props.user === 'mommy') {
    groupName = 'Ibu';
  }
  if (props.user === 'kdr') {
    groupName = 'Kader';
  }
  if (props.user === 'bdn') {
    groupName = 'Bidan';
  }
  if (props.user === 'cons') {
    groupName = 'Konselor';
  }
  if (props.user === 'dsp') {
    groupName = 'Dokter Spesialis';
  }
  if (props.user === 'du') {
    groupName = 'Dokter Umum';
  }
  if (props.user === 'admin') {
    groupName = 'Admin';
  }

  return (
    <>
      <Box p={2}>
        <Typography align="center" variant="h5">
          Jumlah {groupName} berdasarakan Usia
        </Typography>
      </Box>
      <div>
        <Bar
          data={data}
          height={400}
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

export default DoughnutChart;
