import {Icon} from '@components/Icons';
import React from 'react';
import {Left, Title, Wrapper} from './Header.styles';
import {HeaderProps} from './Header.types';

export const Header: React.FC<HeaderProps> = props => {
  const {icon, title} = props;
  return (
    <Wrapper>
      <Left>
        <Title>{title}</Title>
      </Left>
      {icon && <Icon size={24} name={icon} />}
    </Wrapper>
  );
};
