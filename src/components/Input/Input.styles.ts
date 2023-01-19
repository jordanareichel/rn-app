import {Text} from '@components/Text';
import styled, {css} from 'styled-components/native';
import {InputProps} from './Input.types';

export const Wrapper = styled.View<InputProps>`
  ${({width, disabled, radius = 4, variant = ''}) =>
    css`
      border-radius: ${radius}px;
      width: ${width ? `${width}px` : '100%'};
      overflow: ${['ghost'].includes(variant) ? 'visible' : 'hidden'};
      background-color: ${!disabled ? '#DEDCDB' : 'black'};
    `}
  min-height: 56px;
  position: relative;
  border-style: solid;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  flex: 1;
  top: 10px;
  left: 5px;
  z-index: 2;
  width: 100%;
  height: 100%;
  border: none;
`;

export const Label = styled(Text)`
  left: 8px;
  position: absolute;
  align-self: center;
`;
