import {ModalProps} from 'react-native';

export type LoaderProps = {
  size?: number | 'small' | 'large';
  text?: string;
  color?: string;
} & ModalProps;
