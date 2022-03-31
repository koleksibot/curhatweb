import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { getConsultationperMonth } from '@services/StatisticServices';

const LineChartConsultation = () => {
  const consultationperMonthQuery = useQuery('consultationpermonth', () => {
    return getConsultationperMonth();
  });

  const data: any = {
    labels: consultationperMonthQuery.data?.payload.label,
    datasets: [
      {
        label: 'Jumlah Konsultasi',
        data: consultationperMonthQuery.data?.payload.datatotal,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        type: 'line',
      },
      {
        label: 'Penambahan Konsultasi',
        data: consultationperMonthQuery.data?.payload.datapermonth,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        type: 'bar',
      },
    ],
  };
  return (
    <>
      <div>
        <Line data={data} height={400} width={800} options={{ maintainAspectRatio: false }} />
      </div>
    </>
  );
};

export default LineChartConsultation;
