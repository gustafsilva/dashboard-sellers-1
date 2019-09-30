import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Line from './line';

import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
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
