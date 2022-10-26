import {Text} from '@components/Text';
import _ from '@utils/object';
import React from 'react';
import {theme} from '@styles/theme';
import {Body, Wrapper} from './Home.styles';
import {StatusBar} from 'react-native';
import {Random} from '@components/Random';
import {Button} from '@components/Button';
import {Counter} from '@components/Counter';
import {Header} from '@components/Header';
import {Icon} from '@components/Icons';
export const Home = () => {
  return (
    <Wrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Header title="Bem vinda Jordana" icon="bell" />
      <Body>
        <Text
          fontSize={_.get(theme, 'font.lg')}
          color={_.get(theme, 'colors.dark')}>
          Testando components
        </Text>
        <Icon size={24} name="facebook" color="black" />
        <Random minValue={1} maxValue={60} />
        <Button onPress={() => console.log('alerta')} block fontColor="white">
          Voltar
        </Button>
        <Counter value={100} />
      </Body>
    </Wrapper>
  );
};
