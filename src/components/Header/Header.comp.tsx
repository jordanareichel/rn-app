import React from 'react';

import {Icon} from '@components/Icons/Icon.comp';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {ButtonSubmit, Row, Title, Wrapper} from './Header.styles';
import {HeaderProps} from './Header.types';

export const Header: React.FC<HeaderProps> = props => {
  const {
    title,
    showNotification,
    iconPrev,
    onGoToPrev = () => navigation.goBack(),
    ...rest
  } = props;

  const navigation = useNavigation<any>();

  return (
    <Wrapper {...rest}>
      <Row>
        {iconPrev && (
          <ButtonSubmit onPress={onGoToPrev}>
            <Icon size={24} name={iconPrev} color={'black'} />
          </ButtonSubmit>
        )}
        <Title hasIcon={!!iconPrev} fontSize={18} align={'left'} color="black">
          {title}
        </Title>
      </Row>
      {showNotification && (
        <TouchableOpacity onPress={() => navigation.navigate('notification')}>
          <Icon size={20} name="notification" />
        </TouchableOpacity>
      )}
    </Wrapper>
  );
};

Header.defaultProps = {
  radius: 0,
  elevation: 4,
  color: 'white',
};
