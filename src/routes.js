import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';

const Routes = createAppContainer(
  createStackNavigator({
      Home: {
          screen: Home,
          navigationOptions:{
            headerShown: false
          },
      }
  }, {
      defaultNavigationOptions: {
          headerTintColor: '#000',
          headerBackTitleVisible: false,
          headerStyle: {
              backgroundColor: '#D3D3D3',
          },
      },
  })
);

export default Routes; 