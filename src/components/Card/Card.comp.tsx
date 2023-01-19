import {Icon} from '@components/Icons/Icon.comp';
import {Text} from '@components/Text';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Title, Wrapper} from './Card.styles';
import {CardProps} from './Card.types';

export const Card: React.FC<CardProps> = props => {
  const {icon, title, description, disabled, onPress} = props;

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Wrapper radius={8} elevation={8}>
        <Icon name={icon} size={40} color={'black'} />
        <Title align="left" fontWeight="bold">
          {title}
        </Title>
        <Text align={'left'} fontSize={14}>
          {description}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  );
};
