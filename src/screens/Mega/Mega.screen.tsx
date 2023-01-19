import React, {useState} from 'react';

import {Container} from '@components/Container';
import {Text} from '@components/Text';
import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import {Body} from './Mega.styles';
import {Mega as CompMega} from '@components/Mega';
import {Alert} from 'react-native';

export const Mega = () => {
  const navigation = useNavigation<any>();

  const [value, setValue] = useState(0);
  const [generateNumber, setGenerateNumber] = useState([]);

  function handleChangeValue(val: number) {
    setValue(val);
  }

  /* Função recursiva */
  function getNumber(val) {
    const random = Math.floor(Math.random() * 1000000);
    return val.includes(random) ? getNumber(val) : random;
  }

  function handleGenerateNumbers() {
    const number = Array(value)
      .fill({})
      .reduce(num => [...num, getNumber(num)], []);
    setGenerateNumber(number.splice(0, value));
    showAlert();
  }

  function showAlert() {
    Alert.alert('Números gerados', `${generateNumber}`);
  }

  return (
    <Container
      statusBar={{
        barStyle: 'dark-content',
        backgroundColor: 'white',
      }}>
      <Header
        title="Mega Sena"
        iconPrev="arrow-left"
        onGoToPrev={() => navigation.goBack()}
      />
      <Body>
        <Text fontSize={18} color={'black'}>
          Gerador de Mega Sena
        </Text>
        <CompMega
          quantity={value}
          onChangeValue={handleChangeValue}
          onPress={() => handleGenerateNumbers()}
        />
      </Body>
    </Container>
  );
};
