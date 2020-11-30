import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// My Components
import HomeScreen from './screens/Home';
import AuthScreen from './screens/Auth';
import RealtimeDBScreen from './screens/RealtimeDB';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'React Native Firebase',
          }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            title: 'Authentication',
          }}
        />
        <Stack.Screen
          name="RealtimeDB"
          component={RealtimeDBScreen}
          options={{
            title: 'Realtime Database',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
