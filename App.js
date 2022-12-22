import { View, StatusBar, ImageBackground } from 'react-native-web';
import Main from './src/telas/Login';
import Telas from './src/telas/Tempo'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main}/>
          <Stack.Screen name="Tempo" component={Telas}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

