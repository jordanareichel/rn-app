import React from 'react';
import {styles} from './Home.styles';
import {FlatList} from 'react-native';
import {Card} from '@components/Card';
import {useNavigation} from '@react-navigation/native';
import {Container} from '@components/Container';
import {Header} from '@components/Header';
import {StackParamList} from '@navigation/Routers.type';

export type MenuProps = {
  title: string;
  icon: string;
  route: string;
  params?: any;
  description: string;
};

const MENU: MenuProps[] = [
  {
    title: 'Mega Sena',
    icon: 'grid',
    route: 'Mega',
    description: 'Aposte',
  },
  {
    title: 'Calculadora',
    icon: 'calc',
    route: '',
    description: 'Calcule agora',
  },
  {
    title: 'Tarefas',
    icon: 'file-text',
    route: '',
    description: 'Crie sua lista de tarefas',
  },
  {
    title: 'Instagram',
    icon: 'instagram',
    route: '',
    description: 'Navegue pelo app',
  },
];

export const Home = () => {
  const navigation = useNavigation<any>();

  function handlePress(route: string, params: any) {
    navigation.navigate(route as keyof StackParamList, params);
  }

  return (
    <Container
      statusBar={{
        barStyle: 'dark-content',
        backgroundColor: 'white',
      }}>
      <Header title="Bem vindo" icon={'menu'} showNotification />
      <FlatList
        data={MENU}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.body}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: {route, params, ...itemProps}, index}) => {
          return (
            <Card
              key={index}
              {...itemProps}
              onPress={() => route && handlePress(route, params)}
            />
          );
        }}
      />
    </Container>
  );
};
