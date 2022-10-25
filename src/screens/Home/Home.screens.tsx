import {Text} from '@components/Text';
import _ from '@utils/object';
import React from 'react';
import {theme} from '@styles/theme';
import {Body, Wrapper} from './Home.styles';
import {StatusBar} from 'react-native';
export const Home = () => {
  return (
    <Wrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Body>
        <Text
          fontSize={_.get(theme, 'font.lg')}
          color={_.get(theme, 'colors.dark')}>
          Ola react native
        </Text>
      </Body>
    </Wrapper>
  );
};
