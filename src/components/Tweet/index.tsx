import React from 'react';

import {
  Container,
  RocketseatIcon,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Fernando</strong>
            <span>@codder404</span>
            <Dot />
            <time>16 de Agost</time>
          </Header>
          <Description>Don't cry, Say fuck you and smile!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              42
            </Status>
            <Status>
              <RetweetIcon />
              42
            </Status>
            <Status>
              <LikeIcon />
              1142
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
