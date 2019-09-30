import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@material-ui/core';

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
  const { className, products, ...rest } = props;

  const classes = useStyles();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedProducts = [];

    if (event.target.checked) {
      newSelectedProducts = props.products.map((product) => product.code);
    } else {
      newSelectedProducts = [];
    }

    setSelectedProducts(newSelectedProducts);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProducts.indexOf(id);
    let newSelectedProducts = [];

    if (selectedIndex === -1) {
      newSelectedProducts = newSelectedProducts.concat(selectedProducts, id);
    } else if (selectedIndex === 0) {
      newSelectedProducts = newSelectedProducts.concat(selectedProducts.slice(1));
    } else if (selectedIndex === selectedProducts.length - 1) {
      newSelectedProducts = newSelectedProducts.concat(selectedProducts.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProducts = newSelectedProducts.concat(
        selectedProducts.slice(0, selectedIndex),
        selectedProducts.slice(selectedIndex + 1),
      );
    }

    setSelectedProducts(newSelectedProducts);
  };

  const handlePageChange = (event, pageChange) => {
    setPage(pageChange);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

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
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedProducts.length === products.length}
                      color="primary"
                      indeterminate={
                        selectedProducts.length > 0 && selectedProducts.length < products.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Código</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Concorrentes</TableCell>
                  <TableCell>Última Venda</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.slice(0, rowsPerPage).map((product) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={product.code}
                    selected={selectedProducts.indexOf(product.code) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedProducts.indexOf(product.code) !== -1}
                        color="primary"
                        onChange={(event) => handleSelectOne(event, product.code)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>{product.code}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{`R$ ${product.price}`}</TableCell>
                    <TableCell>
                      {product.competitor}
                    </TableCell>
                    <TableCell>
                      {moment(product.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={products.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Produtos por página"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
      </CardActions>
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
