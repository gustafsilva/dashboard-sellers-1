import Styled from 'styled-components';
import {
  AppBar,
  Grid,
  Typography,
  Avatar,
  Toolbar,
} from '@material-ui/core';

export const Container = Styled(AppBar).attrs({
  position: 'fixed',
  color: 'default',
})`
  padding: 0.5em;
`;

export const Content = Styled(Toolbar).attrs({
  variant: 'dense',
})``;

export const ProfileInfo = Styled(Grid).attrs({
  container: true,
  direction: 'row',
  justify: 'flex-end',
  alignItems: 'center',
})``;

export const ProfileText = Styled(Typography).attrs({
  variant: 'overline',
})``;

export const ProfileAvatar = Styled(Avatar)`
  margin-left: 0.3em;
`;
