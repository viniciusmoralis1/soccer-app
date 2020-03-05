import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';

const Routes = createAppContainer(
  createStackNavigator({
      Home: {
          screen: Home,
          navigationOptions:{
              title: 'Soccer'
          },
      }
  }, {
      defaultNavigationOptions: {
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerStyle: {
              backgroundColor: '#111',
          },
      },
  })
);

export default Routes; 