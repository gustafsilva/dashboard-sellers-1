import Styled from 'styled-components';
import {
  Paper,
  InputBase,
  IconButton,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import { primary } from '../../utils/colors';

export const Container = Styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400;
`;

export const Input = Styled(InputBase).attrs({
  placeholder: 'Buscar produto',
  inputProps: { 'arial-label': 'seach product' },
})``;

export const Button = Styled(IconButton).attrs({
  'aria-label': 'search',
})`
  padding: 10px;
`;

export const Icon = Styled(SearchIcon)`
  color: ${primary};
`;
