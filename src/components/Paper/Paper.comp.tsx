import React from 'react';
import {Wrapper, Content} from './Paper.styles';
import {PaperProps} from './Paper.types';

export const Paper: React.FC<PaperProps> = props => {
  const {
    size,
    color,
    radius,
    center,
    circle,
    gradient,
    children,
    elevation,
    flexDirection,
    styleContent,
    gradientDirection,
    ...rest
  } = props;

  return (
    <Wrapper
      {...Object.assign(
        {size, color, center, circle, radius, flexDirection, elevation},
        rest,
      )}>
      {gradient ? (
        <Content
          colors={[]}
          style={styleContent}
          {...Object.assign({
            size,
            color,
            center,
            circle,
            radius,
            flexDirection,
            gradientDirection,
          })}>
          {children}
        </Content>
      ) : (
        children
      )}
    </Wrapper>
  );
};
