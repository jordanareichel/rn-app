import {StyleProp, ViewProps, ViewStyle} from 'react-native';

type DefaultProps = {
  size?: number;
  radius?: number;
  center?: boolean;
  circle?: boolean;
  color?: string | string[];
  flexDirection?: 'row' | 'column';
  gradientDirection?: 'vertical' | 'horizontal';
};

export type GradientProps = DefaultProps;

export type PaperProps = {
  gradient?: boolean;
  elevation?: number;
  borderColor?: string;
  borderWidth?: number;
  styleContent?: StyleProp<ViewStyle>;
} & ViewProps &
  DefaultProps;
