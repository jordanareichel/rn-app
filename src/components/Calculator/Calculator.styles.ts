import {Text} from '@components/Text';
import {theme} from '@styles/theme';
import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Number = styled(Text)<{
  color?: string;
  double?: boolean;
  triple?: boolean;
}>`
  ${({color = theme.colors.light, double = false, triple = false}) => css`
    background-color: ${color};
    width: ${double
      ? (Dimensions.get('window').width / 4) * 2
      : triple
      ? (Dimensions.get('window').width / 4) * 3
      : Dimensions.get('window').width / 4};
  `}
  font-size: 40px;
  height: ${Dimensions.get('window').width / 4};
  padding: 16px;
  text-align: center;
  border-width: 1px;
  border-color: #888;
  color: black;
`;

export const Double = styled.View`
  width: ${(Dimensions.get('window').width / 4) * 2};
`;
