import { View, StatusBar, ImageBackground } from 'react-native-web';
import Main from './src/telas/Login';
import Telas from './src/telas/Tempo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Telas" component={Telas} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}