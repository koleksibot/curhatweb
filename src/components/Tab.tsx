import { Tab, TabProps } from '@material-ui/core';
import React from 'react';

interface CustomTabProps extends TabProps {
  index: number;
}

const CustomTab = (props: CustomTabProps) => {
  const { label, index, ...rest } = props;
  const a11yProps = () => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  return <Tab label={label} {...a11yProps()} {...rest} />;
};

export default CustomTab;
