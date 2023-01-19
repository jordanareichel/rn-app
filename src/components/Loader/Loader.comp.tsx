import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import {Title, Wrapper} from './Loader.styles';
import {LoaderProps} from './Loader.types';

export const Loader: React.FC<LoaderProps> = props => {
  const {size, text, color, ...rest} = props;

  return (
    <Modal {...rest}>
      <Wrapper>
        <ActivityIndicator size={size} color={color} />
        <Title fontWeight="semi-bold">{text}</Title>
      </Wrapper>
    </Modal>
  );
};

Loader.defaultProps = {
  animationType: 'fade',
  color: 'green',
};
