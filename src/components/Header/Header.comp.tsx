import React from 'react';

import {Icon} from '@components/Icons/Icon.comp';
import {useNavigation} from '@react-navigation/native';
import {IconBack, Items, Notifications, Row, Wrapper} from './Header.styles';
import {HeaderProps} from './Header.types';
import {Text} from '@components/Text';

export const Header: React.FC<HeaderProps> = props => {
  const {
    title,
    icon,
    showNotification,
    onPress = () => navigation.goBack(),
    ...rest
  } = props;

  const navigation = useNavigation<any>();

  return (
    <Wrapper elevation={8} {...rest}>
      <Row>
        <Items>
          <IconBack onPress={onPress}>
            <Icon size={24} name={icon} color={'black'} />
          </IconBack>
          <Text fontSize={18} align={'left'} fontWeight={'bold'}>
            {title}
          </Text>
        </Items>
        {showNotification && (
          <Notifications onPress={() => navigation.navigate('notification')}>
            <Icon size={24} name="notification" color="black" />
          </Notifications>
        )}
      </Row>
    </Wrapper>
  );
};

Header.defaultProps = {
  radius: 0,
  elevation: 8,
  color: 'white',
};
