import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ProductsTable } from './components';
import { getProduct } from '../../store/actions/product';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const ProductList = ({ myProducts, dispatch, history }) => {
  const classes = useStyles();

  const changeProduct = (product) => {
    dispatch(getProduct(product));
    history.push('/dashboard');
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ProductsTable products={myProducts} changeProduct={changeProduct} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ myProducts, dispatch }) => ({
  myProducts,
  dispatch,
});

export default withRouter(connect(mapStateToProps)(ProductList));
