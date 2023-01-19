import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '@styles/theme';
import Routes from './navigation/Routers';

function App() {
  return (
    <SafeAreaProvider style={styles.safeAreaView}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
