import { CircularProgress, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getCalendar } from '@services/UserServices';
import { addMonths, parseISO } from 'date-fns/esm';
import theme from '@theme/theme';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { DataGrid } from '@material-ui/data-grid';
import InfoCalendarDialog from '../components/InfoCalendarDialog';
import { columns, IDiaryASIRow } from '../components/diaryASIGridOptions';

const locales = {
  // eslint-disable-next-line global-require
  id: require('date-fns/locale/id'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'right',
    '&>*': {
      marginBottom: 16,
    },
  },
  calendar: {
    minHeight: '100vh',
    [`@media (min-height: 1080px)`]: {
      minHeight: '60vh',
    },
  },
}));

const eventType = {
  breastfeedGiven: 'breastfeedGiven',
  asiEksklusif: 'asiEksklusif',
};

interface ICalendarEvent {
  id: number;
  data?: ICalendar;
  start: Date;
  end: Date;
  title: string;
  type: string;
}

const DiaryASI = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useQuery(['calendars'], () => getCalendar(parseInt(id, 10)));

  const { payload } = useSelector((state: RootState) => state.userProfile);

  const [openDialog, setOpenDialog] = useState(false);

  const [infoData, setInfoData] = useState<ICalendar | undefined>(undefined);

  useEffect(() => {
    const babyDob = parseISO(payload?.profile?.baby?.dob ?? '1999-01-23');
    events.push({
      id: 0,
      start: babyDob,
      end: addMonths(babyDob, 6),
      title: 'ASI Eksklusif',
      type: eventType.asiEksklusif,
    });
  }, [data]);

  const events: ICalendarEvent[] = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.payload.map((event) => ({
      id: event.id,
      data: event,
      start: parseISO(event.calenderDate),
      end: parseISO(event.calenderDate),
      title: 'Sudah menyusui',
      type: eventType.breastfeedGiven,
    }));
  }, [data]);

  const rows: IDiaryASIRow[] = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.payload.map((event, index) => ({
      ...event,
      number: index + 1,
      isFeedingFood: event.isFeedingFood ? 'Ya' : 'Tidak',
    }));
  }, [data]);

  const classes = useStyles();

  const handleSelect = (event: ICalendarEvent) => {
    setInfoData(event.data);
    setOpenDialog(true);
  };

  const handleEventPropGetter = (event: ICalendarEvent) => {
    let backgroundColor = theme.palette.primary.main;
    if (event.type === eventType.asiEksklusif) {
      backgroundColor = theme.palette.secondary.main;
    }
    return {
      style: {
        backgroundColor,
      },
    };
  };

  return (
    <div className={classes.container}>
      {!isLoading ? (
        <>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={handleEventPropGetter}
            className={classes.calendar}
            defaultDate={new Date(2021, 3, 8)}
            views={{ month: true }}
            selectable={false}
            onSelectEvent={handleSelect}
            slotPropGetter={() => ({ style: { height: '300px' } })}
          />
          {rows && (
            <DataGrid
              autoHeight
              rows={rows}
              columns={columns}
              pageSize={20}
              checkboxSelection={false}
            />
          )}
        </>
      ) : (
        <CircularProgress />
      )}
      <InfoCalendarDialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
        data={infoData}
      />
    </div>
  );
};

export default DiaryASI;
