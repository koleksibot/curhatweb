import { useMemo, useState } from 'react';
import { DataGrid, GridPageChangeParams } from '@material-ui/data-grid';
import CustomLoadingOverlay from '@components/CustomLoadingOverlay';
import { useQuery } from 'react-query';
import { getCalendarReport } from '@services/CalendarServices';
import { addMonths, parseISO } from 'date-fns';
import { columns, ICalendarRow } from './calendarDataGridOptions';

const CalendarDataGrid = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(['calendarReport', page], () => getCalendarReport({ page }));

  const rows: ICalendarRow[] = useMemo(
    () =>
      data
        ? data?.payload.data.map(
            (row, index): ICalendarRow => ({
              id: row.userId,
              no: index + 1 + 30 * (page - 1),
              name: row.user.fullName || 'Belum mengisi profile',
              start: row.user.profile?.baby?.dob || '-',
              end: row.user.profile?.baby?.dob
                ? addMonths(parseISO(row.user.profile.baby.dob), 6).toISOString()
                : '-',
              total: row.total,
            }),
          )
        : [],
    [data],
  );

  const handlePageChange = (params: GridPageChangeParams) => {
    setPage(params.page + 1);
  };

  return (
    <DataGrid
      autoHeight
      pagination
      rows={rows}
      columns={columns}
      onPageChange={handlePageChange}
      checkboxSelection={false}
      pageSize={30}
      rowCount={data?.payload.total ?? 0}
      loading={isLoading}
      components={{
        LoadingOverlay: CustomLoadingOverlay,
      }}
      paginationMode="server"
    />
  );
};

export default CalendarDataGrid;
