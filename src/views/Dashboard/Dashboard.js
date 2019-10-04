import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import { GET_PRODUCT, getProduct } from '../../store/actions/product';

import {
  MinimumValue,
  MeanValue,
  MaximumValue,
  Code,
  TotalProfit,
  LatestSales,
  Name,
  LatestOrders,
  Price,
  Sellers,
  Search,
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  valuesPrice: {
    marginTop: 20,
  },
}));

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
}

const createDataVoid = (product) => ({
  ...product,
  min: product.currentPrice - product.currentPrice * 0.2,
  mean: product.currentPrice + product.currentPrice * 0.3,
  max: product.currentPrice + product.currentPrice * 0.7,
  sellerTheSameProduct: getRandomInt(1, 15),
});


const Dashboard = ({ product, products, dispatch }) => {
  const classes = useStyles();

  const changeProductDetail = (productName) => {
    const productDetail = products.filter((p) => p.name === productName);
    console.log(productDetail);
    if (productDetail) {
      dispatch(getProduct(createDataVoid(productDetail[0])));
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <Search data={products} productSelect={changeProductDetail} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Name>{product.name}</Name>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Code>{product.productId}</Code>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Price>{product.currentPrice}</Price>
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
            <Sellers>{product.sellerTheSameProduct}</Sellers>
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            className={classes.valuesPrice}
          >
            <MaximumValue>{product.max}</MaximumValue>
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            className={classes.valuesPrice}
          >
            <MeanValue>{product.mean}</MeanValue>
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            className={classes.valuesPrice}
          >
            <MinimumValue>{product.min}</MinimumValue>
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

const mapStateToProps = ({ product, products, dispatch }) => ({
  product,
  products,
  dispatch,
});

export default connect(mapStateToProps)(Dashboard);
