import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IconsProps} from './Icons.types';
import _ from '@utils/object';

export const Wrapper = styled(FontAwesome).attrs<{IconsProps}>(
  ({theme, color = _.get(theme, 'colors.ligth', '#FFFFFF')}, size = 24) => ({
    color: _.get(theme, `colors.${color}`, color),
    width: `${size}px`,
    height: `${size}px`,
  }),
)<IconsProps>``;
