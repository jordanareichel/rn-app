import {theme} from '@styles/theme';
import _ from '@utils/object';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const ButtonGenerate = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${_.get(theme, 'colors.dark')};
  border-radius: 16px;
  margin: 32px;
`;
