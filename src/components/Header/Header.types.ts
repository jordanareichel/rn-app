import {PaperProps} from '@components/Paper';

export type HeaderProps = {
  title?: string;
  onPress?: () => void;
  showNotification?: boolean;
  icon: string;
} & PaperProps;
