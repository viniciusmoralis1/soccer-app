import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Info from './screens/Info';

const Routes = createAppContainer(
  createStackNavigator({
      Home: {
          screen: Home,
          navigationOptions:{
            headerShown: false
          },
      },
      Info: {
        screen: Info,
        navigationOptions:{
          title: 'Times   '
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