import {Text} from '@components/Text';
import {theme} from '@styles/theme';
import _ from '@utils/object';
import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 56px;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${_.get(theme, 'colors.dark')};
`;

export const Left = styled.View`
  flex-direction: row;
`;

export const Title = styled(Text)<{haveIcon: boolean}>`
  ${({haveIcon}) => css`
    margin: 0 0 0 ${haveIcon ? 8 : 0}px;
  `}
`;
