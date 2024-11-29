import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProjectScreen from './src/screens/ProjectScreen';
import TaskScreen from './src/screens/TaskScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Projects Overview'
          }}
        />
        <Stack.Screen 
          name="Project" 
          component={ProjectScreen}
          options={{
            title: 'Project Details'
          }}
        />
        <Stack.Screen 
          name="Task" 
          component={TaskScreen}
          options={{
            title: 'Task Details'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;