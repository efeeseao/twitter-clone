import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Middle: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Fernando</strong>
          <span>1,333 Tweets</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage /> */}
      {/* <ButtonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtonMenu> */}
    </Container>
  );
};

export default Middle;
