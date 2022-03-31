import { DataGrid } from '@material-ui/data-grid';
import { useMemo } from 'react';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import { getUserActivitiesDownload } from '@services/UserServices';
import { useParams } from 'react-router-dom';
import FileSaver from 'file-saver';
import { columns, IActivityRow } from '../components/activityGridOptions';

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'right',

    '&>*': {
      marginBottom: 16,
    },
  },
}));

const ActivityInfo = () => {
  const { id } = useParams<{ id: string }>();

  const classes = useStyles();

  const activities = useSelector((state: RootState) => state.userProfile.payload?.activities);

  const rows: IActivityRow[] | undefined = useMemo(
    () =>
      activities?.map(
        (activity: IUserActivity, index): IActivityRow => ({
          id: activity.id,
          number: index + 1,
          createdAt: activity.createdAt,
          eventName: activity.eventName,
        }),
      ),
    [activities],
  );

  const handleDownload = async () => {
    const response = await getUserActivitiesDownload(parseInt(id, 10));
    FileSaver.saveAs(response as Blob);
  };

  return (
    <div className={classes.container}>
      <Button variant="contained" onClick={handleDownload} color="primary">
        Download Excel
      </Button>
      {rows && (
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={20}
          checkboxSelection={false}
        />
      )}
    </div>
  );
};

export default ActivityInfo;
