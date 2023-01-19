import {ReactNode} from 'react';
import {StatusBarProps, ImageBackgroundProps} from 'react-native';
import {LinearGradientProps} from 'react-native-linear-gradient';

export type ContainerProps = {
  statusBar?: StatusBarProps;
  backgroundImage?: ImageBackgroundProps;
  colors?: LinearGradientProps['colors'];
  children: ReactNode;
};
