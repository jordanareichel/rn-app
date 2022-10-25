import styled, {css} from 'styled-components/native';
import {Text} from 'react-native';
import {TextProps} from './Text.types';

export const TextRn = styled(Text)<TextProps>`
  ${({fontSize = '', color = ''}) => css`
    font-size: ${fontSize}px;
    color: ${color};
  `}
`;
