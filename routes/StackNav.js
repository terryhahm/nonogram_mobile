import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import HowToPlay from '../screens/HowToPlay';
import GamePlay from '../screens/GamePlay';

const screens = {
  Home: {
    screen: Home
  },
  GamePlay: {
    screen: GamePlay
  },
  HowToPlay: {
    screen: HowToPlay
  }
}

const StackNav = createStackNavigator(screens);

export default createAppContainer(StackNav);