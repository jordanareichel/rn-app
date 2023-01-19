import React, {useCallback, useEffect, useRef} from 'react';
import {Label, TextInput, Wrapper} from './Input.styles';
import {InputProps} from './Input.types';
import {TextInput as TextInputRef} from 'react-native';

export const Input: React.FC<InputProps> = props => {
  const {
    label,
    mask,
    width,
    variant,
    color,
    value,
    radius,
    disabled,
    placeholder,
    onChangeText: onChangeTextProps,
    ...rest
  } = props;

  const refInput = useRef<TextInputRef>(null);

  useEffect(() => {
    if (refInput.current) {
      refInput.current.setNativeProps({disabled});
    }
  }, [refInput, disabled]);

  const onChangeText = useCallback(
    (text: string) => {
      switch (mask) {
        case 'cpf':
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
          break;
        case 'cnpj':
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
          break;
        case 'phone':
          text = text.replace(/\D/g, '');
          text = text.replace(/^(\d\d)/g, '($1)');
          text = text.replace(/^(\d\d)(\d)/g, '($1) $2');
          text = text.replace(/(\d{5})(\d)/, '$1-$2');
          break;
        case 'cep':
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
          break;
        case 'data':
          text = text.replace(/\D/g, '');
          text = text.replace(/^(\d{2})(\d)/, '$1/$2');
          text = text.replace(/.(\d{2})(\d)/, '$1/$2');
          text = text.replace(/(\d{2})(\d)/, '$1/$2');
          break;
        case 'currency':
          if (text) {
            text = text.toString().replace(/\D/g, '');
            text =
              'R$ ' +
              text
                .toString()
                .replace(/(\d)(\d{8})$/, '$1.$2')
                .replace(/(\d)(\d{8})$/, '$1.$2')
                .replace(/(\d)(\d{2})$/, '$1,$2');
          }
          break;
        default:
          break;
      }
      onChangeTextProps && onChangeTextProps(text);
    },
    [mask, onChangeTextProps],
  );

  return (
    <Wrapper {...{width, radius, disabled, variant}}>
      <TextInput
        {...Object.assign(
          {
            value,
            onChangeText,
          },
          rest,
        )}
        ref={refInput}
        editable={!disabled}
        placeholder={placeholder}
      />
      {!!label && (
        <Label
          {...Object.assign({
            disabled,
            color,
          })}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};
