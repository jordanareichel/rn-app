import {TextInputProps} from 'react-native';

export type MaskTypes = 'cpf' | 'cnpj' | 'phone' | 'cep' | 'data' | 'currency';

export type InputProps = {
  value?: number | string;
  mask?: MaskTypes;
  label?: string;
  placeholder?: string;
  color?: string;
  maxLength?: number;
  square?: boolean;
  radius?: number;
  variant?: 'standard' | 'outlined' | 'ghost';
  maskType?: 'render' | 'value';
  disabled?: boolean;
  width?: number;
  onChangeText?: (text: any) => void;
  onKeyPress?: () => void;
  onPress?(): void;
} & TextInputProps;
