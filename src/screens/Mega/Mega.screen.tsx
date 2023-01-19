import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Container} from '@components/Container';
import {Text} from '@components/Text';
import {Header} from '@components/Header';
import {Mega as CompMega} from '@components/Mega';
import {Loader} from '@components/Loader';
import {Body, Row} from './Mega.styles';
import {Ball} from '@components/Ball';

export const Mega = () => {
  const [value, setValue] = useState(0);
  const [generateNumber, setGenerateNumber] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  });

  function handleGenerateNumbers() {
    setLoading(true);
    const numbers: any[] = [];
    for (let i = 0; i < value; i++) {
      numbers[i] = Math.floor(Math.random() * 60 + 1);
    }
    setGenerateNumber(numbers);
  }

  return (
    <Container
      statusBar={{
        barStyle: 'dark-content',
        backgroundColor: 'white',
      }}>
      <Header title="Mega Sena" icon="arrow-left" showNotification />
      <Loader visible={loading} text="Gerando números... Aguarde" size={50} />
      <Body>
        <View>
          <Text align="center" fontWeight="bold" fontSize={22}>
            Gerador de Mega Sena
          </Text>
        </View>
        {generateNumber.length > 0 && !loading && (
          <Row>
            {generateNumber.map((item, index) => (
              <Ball key={index} numbers={item} />
            ))}
          </Row>
        )}
        <CompMega
          quantity={value}
          onChangeValue={e => setValue(e)}
          onPress={() => handleGenerateNumbers()}
        />
      </Body>
    </Container>
  );
};
