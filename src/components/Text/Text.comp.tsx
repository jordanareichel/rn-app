import React from 'react';
import {TextRn} from './Text.styles';
import {TextProps} from './Text.types';

export const Text: React.FC<TextProps> = props => {
  const {fontSize, color, align, children} = props;
  return (
    <TextRn {...Object.assign({fontSize, color, align})}>{children}</TextRn>
  );
};

Text.defaultProps = {
  color: 'white',
  fontSize: 18,
};
