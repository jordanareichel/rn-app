import React from 'react';
import {Into, Wrapper, Title} from './Button.styles';
import {ButtonProps} from './Button.types';

export const Button: React.FC<ButtonProps> = props => {
  const {
    size,
    shape,
    block,
    width,
    children,
    color,
    fontColor = 'dark',
    ...rest
  } = props;
  return (
    <Wrapper {...rest}>
      <Into {...{color, shape, size, width, block}}>
        {React.isValidElement(children) ? (
          children
        ) : (
          <>
            {children && (
              <Title fontWeight="SemiBold" color={fontColor}>
                {children}
              </Title>
            )}
          </>
        )}
      </Into>
    </Wrapper>
  );
};

Button.defaultProps = {
  fontColor: 'white',
};
