import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';

import {
  Container,
  Content,
  ProfileInfo,
  ProfileText,
  ProfileAvatar,
} from './Header.styles';

function Header({ profileName, profileAvatar }) {
  return (
    <Container>
      <Content>
        <Logo />
        <ProfileInfo>
          <ProfileText>
            Seja bem vindo,&nbsp;
            <b>{profileName}</b>
          </ProfileText>
          <ProfileAvatar>{profileAvatar}</ProfileAvatar>
        </ProfileInfo>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  /** Nome do Usuário logado. */
  profileName: PropTypes.string.isRequired,
  /** Avatar do Usuário logado. */
  profileAvatar: PropTypes.string.isRequired,
};

export default Header;
