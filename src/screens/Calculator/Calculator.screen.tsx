import React, {useState} from 'react';

import {Container} from '@components/Container';
import {Header} from '@components/Header';
import {Body, Row} from './Calculator.styles';
import {Calculator as Calc} from '@components/Calculator';
import {CALC} from './Calculator.infos';
import {Display} from '@components/Display';

const initialValue = {
  displayValue: '0',
  clearDisplay: false,
  operation: '',
  values: [0, 0],
  current: 0,
};

export const Calculator = () => {
  const [newValues, setNewValues] = useState(initialValue);

  function handleAddedNumber(label: string) {
    const clear = newValues.displayValue === '0' || newValues.clearDisplay;
    const currentValue = clear ? '' : newValues.displayValue;
    const displayValue = currentValue + label;

    if (label === '.' && newValues.displayValue.includes('.')) {
      return;
    }

    setNewValues({...newValues, displayValue, clearDisplay: false});
    console.log(newValues.current);

    if (label !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...newValues.values];
      values[newValues.current] = newValue;
      setNewValues({
        displayValue: `${newValue}`,
        values,
        current: newValues.current,
        clearDisplay: false,
        operation: '',
      });
    }
  }

  function clearCalculator() {
    setNewValues({...initialValue});
  }

  function setOperation(operation: string) {
    if (newValues.current === 0) {
      setNewValues({...newValues, operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation === '=';
      const values = [...newValues.values];
    }
  }

  function typeOperation(item) {
    if (item.triple) {
      return clearCalculator();
    }

    if (item.operation) {
      return setOperation(item.label);
    }

    return handleAddedNumber(item.label);
  }

  return (
    <Container
      statusBar={{
        barStyle: 'dark-content',
        backgroundColor: 'white',
      }}>
      <Header title="Calculadora" icon="arrow-left" showNotification />
      <Body>
        <Display value={newValues.displayValue} />
        <Row>
          {CALC.map((item, index) => (
            <Calc
              key={index}
              onPress={() => typeOperation({...item})}
              text={item.label}
              color={item.background}
              {...item}
            />
          ))}
        </Row>
      </Body>
    </Container>
  );
};
