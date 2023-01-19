import _ from '@utils/object';
import LinearGradient from 'react-native-linear-gradient';
import styled, {css} from 'styled-components/native';
import {PaperProps, GradientProps} from './Paper.types';

const gradientSettings = {
  horizontal: {
    end: {x: 1, y: 0},
    start: {x: 0, y: 0},
  },
};

export const Wrapper = styled.View.attrs<PaperProps>(({elevation = 1}) => ({
  elevation,
  shadowColor: 'black',
  ..._.get(`${elevation - 1}`),
}))<PaperProps>`
  ${({
    size,
    center,
    circle,
    borderWidth = 0,
    flexDirection = 'row',
    borderColor = 'transparent',
    radius = 8,
    color = '#FFFFFF',
  }) => css`
    flex-direction: ${flexDirection};
    border-width: ${borderWidth}px;
    width: ${size ? `${size}px` : 'auto'};
    height: ${size ? `${size}px` : 'auto'};
    align-items: ${center ? 'center' : 'flex-start'};
    justify-content: ${center ? 'center' : 'flex-start'};
    border-color: ${borderColor};
    border-radius: ${circle && size ? Math.round(size / 2) : radius}px;
    background-color: ${typeof color === 'string' ? color : 'transparent'};
  `}
  overflow: hidden;
  position: relative;
`;

export const Content = styled(LinearGradient).attrs<GradientProps>(
  ({gradientDirection = 'vertical', color = '#FFFFFF'}) => {
    const colors = [`${color}_gradient` || color] || color;
    return {
      ...gradientSettings[gradientDirection],
      colors: Array.isArray(colors) ? colors : [colors, colors],
    };
  },
)<GradientProps>`
  ${({size, center, circle, flexDirection = 'row', radius = 8}) => css`
    flex-direction: ${flexDirection};
    align-items: ${center ? 'center' : 'flex-start'};
    justify-content: ${center ? 'center' : 'flex-start'};
    border-radius: ${circle && size ? Math.round(size / 2) : radius}px;
  `}
  flex: 1;
`;
