import {Paper} from '@components/Paper';
import {Text} from '@components/Text';
import {theme} from '@styles/theme';
import _ from '@utils/object';
import styled, {css} from 'styled-components/native';

export const Wrapper = styled(Paper)`
  width: 100%;
  height: 56px;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)<{hasIcon?: boolean}>`
  ${({hasIcon}) => css`
    margin: 0 0 0 ${hasIcon ? 8 : 0}px;
  `}
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${_.get(theme, 'colors.light')};
`;
