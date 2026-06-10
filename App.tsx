import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Pshskylinetwrrsstck from './Pshskylinetwrrs/Pshskylinetwrrsnav/Pshskylinetwrrsstck.jsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Pshskylinetwrrsstck />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
