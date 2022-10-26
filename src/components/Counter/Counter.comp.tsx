import {Button} from '@components/Button';
import {Text} from '@components/Text';
import React, {useState} from 'react';
import {Wrapper, Row} from './Counter.styles';
import {CounterProps} from './Counter.types';

export const Counter: React.FC<CounterProps> = props => {
  const {value} = props;
  const [number, setNumber] = useState<number>(value);

  function handleDecrease() {
    setNumber(number - 1);
  }

  function handleIncrease() {
    setNumber(number + 1);
  }

  return (
    <Wrapper>
      <Text fontSize={24} color={'black'}>
        {number}
      </Text>
      <Row>
        <Button width={120} onPress={() => handleDecrease()}>
          Diminuir
        </Button>
        <Button width={120} onPress={() => handleIncrease()}>
          Aumentar
        </Button>
      </Row>
    </Wrapper>
  );
};
