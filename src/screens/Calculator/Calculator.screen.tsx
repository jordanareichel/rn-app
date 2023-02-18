/* eslint-disable no-eval */
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
  operation: null,
  values: [0, 0],
  current: 0,
};

export const Calculator = () => {
  const [newValues, setNewValues] = useState(initialValue);

  function handleAddedNumber(label: string) {
    const clear = newValues.displayValue === '0' || newValues.clearDisplay;
    const currentValue = clear ? '' : newValues.displayValue;
    const displayValue = currentValue + label;

    if (label === '.' && !clear && newValues.displayValue.includes('.')) {
      return;
    }

    setNewValues({...newValues, displayValue, clearDisplay: false});

    if (label !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...newValues.values];
      values[newValues.current] = newValue;
      setNewValues({
        displayValue: `${newValue}`,
        values,
        current: newValues.current,
        clearDisplay: false,
        operation: null,
      });
    }
  }

  function clearCalculator() {
    setNewValues({...initialValue});
  }

  function setOperation(operation) {
    if (newValues.current === 0) {
      setNewValues({
        ...newValues,
        operation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = operation === '=';
      const values = [...newValues.values];
      try {
        values[0] = eval(`${values[0]} ${operation} ${values[1]}`);
      } catch (err) {
        values[0] = newValues.values[0];
      }

      values[1] = 0;
      setNewValues({
        displayValue: `${values[0]}`,
        operation: equals ? '' : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      });
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
