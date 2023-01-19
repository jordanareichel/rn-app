import {Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
  },
});

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  top: 0;
  position: absolute;
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height}px;
`;
