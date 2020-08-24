import React from 'react';

import Middle from '../Middle';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <LeftMenuBar /> */}
        <Middle />
        {/* <RightSideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
