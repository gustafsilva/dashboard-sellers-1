import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: '#0086ffe0',
    color: theme.palette.primary.contrastText,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  differenceValue: {
    color: theme.palette.success.white,
    marginRight: theme.spacing(1),
  },
  caption: {
    color: 'white',
  },
}));

const TotalProfit = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="inherit"
              gutterBottom
              variant="body2"
            >
              FRETE MAGALU
            </Typography>
            <Typography
              color="inherit"
              variant="h2"
            >
              R$9,00
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
          <div className={classes.difference}>
            <Typography
              className={classes.caption}
              variant="caption"
            >
              ECONOMIZE
              <b> R$2,10 </b>
              AGORA MESMO...
            </Typography>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
