import React from 'react';
import {TextRn} from './Text.styles';
import {TextProps} from './Text.types';

export const Text: React.FC<TextProps> = props => {
  const {fontSize, color, children} = props;
  return <TextRn {...Object.assign({fontSize, color})}>{children}</TextRn>;
};

Text.defaultProps = {
  color: 'white',
  fontSize: 18,
};
