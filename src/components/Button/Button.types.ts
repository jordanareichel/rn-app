export type ButtonProps = {
  width?: number | string;
  size?: number;
  border?: number;
  color?: string;
  shape?: 'square' | 'bordered' | 'rounded';
  disabled?: boolean;
  onPress: () => void;
  children: React.ReactNode;
  block?: boolean;
  fontColor?: string;
};
