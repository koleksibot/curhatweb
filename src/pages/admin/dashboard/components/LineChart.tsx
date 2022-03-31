import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { getUserMonthCount } from '@services/StatisticServices';

const LineChart = (props: any) => {
  const userMonthCountQuery = useQuery('userMonthCount', () => {
    return getUserMonthCount(props.user);
  });

  const data: any = {
    labels: userMonthCountQuery.data?.payload.label,
    datasets: [
      {
        label: 'Pertumbuhan Pengguna',
        data: userMonthCountQuery.data?.payload.datatotal,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        type: 'line',
      },
      {
        label: 'Penambahan Pengguna',
        data: userMonthCountQuery.data?.payload.datapermonth,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        type: 'bar',
      },
    ],
  };
  console.log(props.user);
  console.log(userMonthCountQuery.data?.payload);
  console.log(data.labels);
  return (
    <>
      <div>
        <Line data={data} height={400} width={800} options={{ maintainAspectRatio: false }} />
      </div>
    </>
  );
};

export default LineChart;
