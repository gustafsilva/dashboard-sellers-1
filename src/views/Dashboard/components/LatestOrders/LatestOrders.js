import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from '@material-ui/core';

import { formatMoney, getRandomInt } from '../../../../utils';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = props => {
  const { className, data, changeProduct, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Produtos Relacionados"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Vendedor</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Analisar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(product => (
                  <TableRow
                    hover
                    key={product.productId + '' + getRandomInt(0, 1000)}
                  >
                    <TableCell>{product.productId.toUpperCase()}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>Seller {getRandomInt(1, 10)}</TableCell>
                    <TableCell>
                      {formatMoney(product.currentPrice)}
                    </TableCell>
                    <TableCell>
                      <Link href="#" onClick={() => changeProduct(product.name)}>Analisar</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
