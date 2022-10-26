import React from 'react';
import {Wrapper} from './Icons.styles';
import {IconsProps} from './Icons.types';

export const Icon: React.FC<IconsProps> = props => {
  return <Wrapper {...props} />;
};
