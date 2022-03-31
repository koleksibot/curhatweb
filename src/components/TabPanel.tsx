import * as React from 'react';
import { Box, Typography } from '@material-ui/core';

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

const TabPanel = (props: TabPanelProps) => {
  const { index, value, children, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
