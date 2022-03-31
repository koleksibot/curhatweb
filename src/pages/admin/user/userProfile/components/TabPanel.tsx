import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}));

export type InfoList = Record<string, string | undefined>;

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

const TabPanel = (props: TabPanelProps) => {
  const { index, value, children, ...rest } = props;

  const classes = useStyle();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      className={classes.root}
      {...rest}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanel;
