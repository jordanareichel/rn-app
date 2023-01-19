import React, {useEffect, useMemo} from 'react';
import {useIsFocused} from '@react-navigation/native';
import _ from '@utils/object';
import {StatusBar, Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components/native';
import {Wrapper, Background, styles} from './Container.styles';
import {ContainerProps} from './Container.types';

export const Container: React.FC<ContainerProps> = props => {
  const {children, statusBar, backgroundImage, colors = []} = props;
  const theme = useTheme();
  const isFocused = useIsFocused();

  useEffect(() => {
    const color = _.get(statusBar, 'backgroundColor', 'transparent');
    if (isFocused && Platform.OS === 'android') {
      StatusBar.setTranslucent(_.get(statusBar, 'translucent', true));
      StatusBar.setBarStyle(_.get(statusBar, 'barStyle', 'dark-content'));
      StatusBar.setBackgroundColor(_.get(theme, `colors.${color}`, color));
    }
  }, [isFocused, statusBar, theme]);

  const render = useMemo(() => {
    return (
      <GestureHandlerRootView style={styles.gestureView}>
        <Wrapper>
          {backgroundImage ? (
            <Background {...backgroundImage}>{children}</Background>
          ) : (
            children
          )}
        </Wrapper>
      </GestureHandlerRootView>
    );
  }, [children, backgroundImage]);

  return !_.isEmpty(colors) ? (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors.map(color => _.get(theme, `colors.${color}`, color))}>
      {render}
    </LinearGradient>
  ) : (
    render
  );
};
