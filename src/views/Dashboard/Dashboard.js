import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  MinimumValue,
  MeanValue,
  MaximumValue,
  Code,
  TotalProfit,
  LatestSales,
  Name,
  LatestProducts,
  LatestOrders,
  Price,
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  valuesPrice: {
    marginTop: 20,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Name />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Code />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Price />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <MinimumValue />
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            className={classes.valuesPrice}
          >
            <MeanValue />
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            className={classes.valuesPrice}
          >
            <MaximumValue />
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <LatestOrders />
        </Grid>
      </Grid>
    </div >
  );
};

export default Dashboard;
