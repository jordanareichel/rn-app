import {Text} from '@components/Text';
import _ from '@utils/object';
import styled, {css} from 'styled-components/native';
import {ButtonProps} from './Button.types';

const radiusShape = {
  square: 0,
  rounded: 100,
  bordered: 4,
};

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Into = styled.View<ButtonProps>`
  ${({
    theme,
    block,
    width,
    color = 'dark',
    shape = 'rounded',
    size = 12,
  }) => css`
    border-radius: ${_.get(radiusShape, shape, 0)}px;
    width: ${block ? '100%' : width ? `${width}px` : 'auto'};
    padding: ${size}px;
    border-color: ${_.get(theme, `colors.${color}`, color)};
    background-color: ${_.get(theme, `colors.${color}`)};
  `}
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  flex-direction: row;
`;
