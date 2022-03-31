import React from 'react';
import Breadcrumbs from '@components/CustomBreadcrumbs';
import { makeStyles, Theme } from '@material-ui/core';
import Container from '@components/Container';

const useStyles = makeStyles((theme: Theme) => ({
  breadCrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

interface ContentLayoutProps {
  children: React.ReactNode;
  noContainer?: boolean;
  levelOneLabel: string;
  levelOneTo: string;
  levelTwoLabel: string;
}

const ContentLayout = (props: ContentLayoutProps) => {
  const { children, noContainer = false, levelOneLabel, levelTwoLabel, levelOneTo } = props;
  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs
        className={classes.breadCrumbs}
        levelOneLabel={levelOneLabel}
        levelOneTo={levelOneTo}
        levelTwoLabel={levelTwoLabel}
      />
      {!noContainer && <Container>{children}</Container>}
      {noContainer && children}
    </div>
  );
};

export default ContentLayout;
