import React from 'react';
import Root from './Src/Navigation/RootNavigation';
import { ThemeProvider } from './Src/Helper/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
};

export default App;
