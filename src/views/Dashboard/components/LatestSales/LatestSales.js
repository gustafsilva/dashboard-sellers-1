import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Line from './line';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    position: 'relative',
    marginBottom: 23,
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Estatísticas de Busca"
        action={(
          <Button
            size="small"
            variant="text"
          >
            ANUAL <ArrowDropDownIcon />
          </Button>
        )}
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Line />
        </div>
      </CardContent>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
