import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { geArticleRatesperMonth } from '@services/StatisticServices';

const LineChartArticle = () => {
  const RateperMonthQuery = useQuery('ratepermonth', () => {
    return geArticleRatesperMonth();
  });

  const data: any = {
    labels: RateperMonthQuery.data?.payload.label,
    datasets: [
      {
        label: 'Total Jumlah Rating',
        data: RateperMonthQuery.data?.payload.datatotal,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        type: 'line',
      },
      {
        label: 'Penambahan Rating per Bulan',
        data: RateperMonthQuery.data?.payload.datapermonth,
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

export default LineChartArticle;
