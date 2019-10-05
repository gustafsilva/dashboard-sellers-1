import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from '@material-ui/core';
import { formatMoney } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

const ProductsTable = (props) => {
  const { className, products, changeProduct, ...rest } = props;

  const classes = useStyles();

  const [selectedProducts ] = useState([]);
  const [rowsPerPage] = useState(10);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Estoque</TableCell>
                  <TableCell>Analisar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.slice(0, rowsPerPage).map((product) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={product.productId}
                    selected={selectedProducts.indexOf(product.productId) !== -1}
                  >
                    <TableCell>{product.productId.toUpperCase()}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{formatMoney(product.currentPrice)}</TableCell>
                    <TableCell>
                      {product.stock_count}
                    </TableCell>
                    <TableCell>
                      <Link href="#" onClick={() => changeProduct(product)}>
                        Analisar
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

ProductsTable.defaultProps = {
  className: '',
};

ProductsTable.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProductsTable;
