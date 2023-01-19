import React from 'react';
import _ from '@utils/object';
import {useTheme} from 'styled-components/native';
import icons from './data';
import {IconProps} from './Icon.types';

export const Icon: React.FC<IconProps> = props => {
  const {name, size, color} = props;
  const theme = useTheme();
  return Object.prototype.hasOwnProperty.call(icons, name) ? (
    React.createElement(_.get(icons, name), {
      width: size,
      height: size,
      style: {
        color: _.get(theme, `colors.${color}`, color),
      },
    })
  ) : (
    <></>
  );
};

Icon.defaultProps = {
  size: 16,
  color: 'neutral9',
};
