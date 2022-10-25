import {theme} from '@styles/theme';
import _ from '@utils/object';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${_.get(theme, 'colors.light')};
`;

export const Body = styled.View`
  padding: 16px;
`;
