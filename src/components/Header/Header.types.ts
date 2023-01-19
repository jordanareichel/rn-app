import {PaperProps} from '@components/Paper';

export type HeaderProps = {
  title?: string;
  iconPrev?: string;
  onGoToPrev?: () => void;
  showNotification?: boolean;
  type?: number;
  text?: string;
  goTo?: string;
  goBack?: boolean;
  showIcon?: boolean;
} & PaperProps;
