import {Paper} from '@components/Paper';
import {Text} from '@components/Text';
import {Dimensions} from 'react-native';
import {css} from 'styled-components';
import styled from 'styled-components/native';

export const Wrapper = styled(Paper)`
  width: 160px;
  height: 160px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${Dimensions.get('window').width - 48 / 2}px;
`;

export const Title = styled(Text)<{disabled?: boolean}>`
  ${({disabled}) => css`
    color: ${!disabled ? '#373737' : '#A5ABB2'};
  `}
  margin: 8px 0;
`;
