import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import StatusScreen from './src/screens/StatusScreen';
import SubgroupScreen from './src/screens/SubgroupScreen';
import SubgroupInfo from './src/screens/SubgroupInfo';
import HomeScreen from './src/screens/HomeScreen';
import Pay from './src/screens/Pay';
import ChatScreen from './src/screens/Chat';
import {Provider} from 'react-redux';
import reducers from './src/reducers/index';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const RootStack = createStackNavigator(
  {
    Start: StartScreen,
    Login: LoginScreen,
    Register: RegisterScreen, 
    Status: StatusScreen,
    Subgroup: SubgroupScreen,
    Home:HomeScreen,
    Pay:Pay,
    Chat: ChatScreen,
    SubgroupInfo: SubgroupInfo
  },
  {
    initialRouteName: 'Home',
  }
);

const Navigation = createAppContainer(RootStack);

let store = createStore(reducers, compose(
  applyMiddleware(thunk, logger)
  ));

export default class App extends React.Component {
  render() {
    return(
      <Provider store = {store}>
        <Navigation />
      </Provider>
    );
  
  }
}
