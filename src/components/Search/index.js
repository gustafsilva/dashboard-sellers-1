import React from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Input,
  Button,
  Icon,
} from './Search.styles';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

function Search({ value, onChange }) {
  const classes = useStyles();

  return (
    <Container>
      <Input
        className={classes.input}
        value={value}
        onChange={onChange}
      />
      <Button>
        <Icon />
      </Button>
    </Container>
  );
}

Search.propTypes = {
  /** Nome do produto a ser pesquisado. */
  value: Proptypes.string.isRequired,
  /** Função que será executada quando valor de busca mudar. */
  onChange: Proptypes.func.isRequired,
};

export default Search;
