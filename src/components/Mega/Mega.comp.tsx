import {Input} from '@components/Input';
import {Text} from '@components/Text';
import React from 'react';
import {ButtonGenerate, Wrapper} from './Mega.styles';
import {MegaProps} from './Mega.types';

export const Mega: React.FC<MegaProps> = props => {
  const {quantity, onChangeValue, onPress} = props;

  return (
    <Wrapper>
      <Input
        placeholder="Digite um número"
        value={String(quantity)}
        onChangeText={onChangeValue}
        keyboardType={'numeric'}
      />
      <ButtonGenerate onPress={onPress} disabled={!quantity}>
        <Text fontSize={16} color="white" fontWeight="bold">
          Gerar
        </Text>
      </ButtonGenerate>
    </Wrapper>
  );
};
