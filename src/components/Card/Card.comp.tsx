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
        <Icon name={icon} size={40} />
        <Title fontSize={18} align="left" color={'black'}>
          {title}
        </Title>
        <Text fontSize={14} align={'left'} color={'black'}>
          {description}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  );
};
