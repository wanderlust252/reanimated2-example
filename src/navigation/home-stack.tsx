import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Example from '@/screens/Example';
import { HomeStackParamList } from './types';
import ExampleWithSpring from '@/screens/ExampleWithSpring';
import ExamplePanResponder from '@/screens/ExamplePanResponder';
import ExampleWithDecay from '@/screens/ExampleWithDecay';
import DragSortingList from '@/screens/DragSortingList';

const HomeStack = createDrawerNavigator<HomeStackParamList>();
const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ header: () => null }} initialRouteName="DragSortingList">
      <HomeStack.Screen name={'Example'} component={Example} />
      <HomeStack.Screen name={'ExampleWithSpring'} component={ExampleWithSpring} />
      <HomeStack.Screen name={'ExamplePanResponder'} component={ExamplePanResponder} />
      <HomeStack.Screen name={'ExampleWithDecay'} component={ExampleWithDecay} />
      <HomeStack.Screen name={'DragSortingList'} component={DragSortingList} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
