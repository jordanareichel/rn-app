import icons from './data';

const names = Object.keys(icons);

export type IconProps = {
  size?: number;
  color?: string;
  name: typeof names[number];
};
