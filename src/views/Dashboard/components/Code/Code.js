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
import TrendingDown from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: '#c739ff',
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
}));

const Code = (props) => {
  const { className, children, ...rest } = props;

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
          alignItems="center"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              CÓDIGO
            </Typography>
            <Typography variant="h4">{children.toUpperCase()}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <TrendingDown className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Code.defaulProps = {
  className: '',
};

Code.propTypes = {
  className: PropTypes.string,
};

export default Code;
