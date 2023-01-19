import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Container} from '@components/Container';
import {Text} from '@components/Text';
import {Header} from '@components/Header';
import {Mega as CompMega} from '@components/Mega';
import {Loader} from '@components/Loader';
import {Body} from './Mega.styles';

export const Mega = () => {
  const [value, setValue] = useState(0);
  const [generateNumber, setGenerateNumber] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  });

  function handleChangeValue(val: number) {
    setValue(val);
  }

  function getNumber(val) {
    const random = Math.floor(Math.random() * 1000000);
    return val.includes(random) ? getNumber(val) : random;
  }

  function handleGenerateNumbers() {
    setLoading(true);
    const number = Array(value)
      .fill({})
      .reduce(num => [...num, getNumber(num)], [])
      .sort((a, b) => a - b);

    setGenerateNumber(number);
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
          {generateNumber.length > 0 && !loading && (
            <>
              <Text>Número gerado</Text>
              <Text fontWeight="bold">{generateNumber.join(',')}</Text>
            </>
          )}
        </View>
        <CompMega
          quantity={value}
          onChangeValue={handleChangeValue}
          onPress={() => handleGenerateNumbers()}
        />
      </Body>
    </Container>
  );
};
