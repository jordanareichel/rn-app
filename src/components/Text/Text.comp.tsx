import React from 'react';
import {TextRn} from './Text.styles';
import {TextProps} from './Text.types';

export const Text: React.FC<TextProps> = props => {
  const {children, ...rest} = props;

  return <TextRn {...Object.assign({...rest})}>{children}</TextRn>;
};

Text.defaultProps = {
  color: 'black',
  fontSize: 18,
  fontWeight: 'normal',
};
