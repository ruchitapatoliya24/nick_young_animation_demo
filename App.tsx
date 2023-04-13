import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/containers/Home';
import DragAnimation from './src/containers/DragAnimation';
import PressAnimation from './src/containers/PressAnimation';
import PinchAnimation from './src/containers/PinchAnimation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DragAnimation" component={DragAnimation} />
        <Stack.Screen name="PressAnimation" component={PressAnimation} />
        <Stack.Screen name="PinchAnimation" component={PinchAnimation} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
