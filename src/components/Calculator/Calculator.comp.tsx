import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Number} from './Calculator.styles';
import {ButtonProps} from './Calculator.types';

export const Calculator: React.FC<ButtonProps> = props => {
  const {onPress, text, ...rest} = props;
  return (
    <TouchableHighlight onPress={onPress}>
      <Number {...Object.assign({...rest})}>{text}</Number>
    </TouchableHighlight>
  );
};
