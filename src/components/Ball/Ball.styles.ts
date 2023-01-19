import {theme} from '@styles/theme';
import _ from '@utils/object';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: ${_.get(theme, 'colors.dark')};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
