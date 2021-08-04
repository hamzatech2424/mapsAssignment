import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from "./Redux/Store"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddLocation from "./Screens/AddLocation"
import AllLocations from "./Screens/AllLocations"
import Maps from "./Screens/Maps"


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const MapStack = (props) => {


  return (
    <Stack.Navigator>


      <Stack.Screen name="Maps" component={Maps} options={{headerShown: false}} />
      <Stack.Screen name="Add-location" component={AddLocation} options={{headerShown: false}} />


    </Stack.Navigator>
  )
}







const App = () => {

  return (

    <React.Fragment>

      {/* For Assignment6 */}
      {/* <NavigationContainer>

      <Stack.Navigator initialRouteName="SplashScreen">
       
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer> */}

      <Provider store={store}>


        <NavigationContainer>

          <Tab.Navigator
            activeColor="white"
            inactiveColor="grey"
            barStyle={{ backgroundColor: "#FC5B3F" }}

          >
            <Tab.Screen name="MapStackScreen" component={MapStack} options={{
              tabBarLabel: 'Map',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="map" color="#359C70" size={25} />
              ),
            }} />


            <Tab.Screen name="All location" component={AllLocations} options={{
              tabBarLabel: 'All locations',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="location-on" color="red" size={25} />
              ),
            }} />

          </Tab.Navigator>

        </NavigationContainer>


      </Provider>


    </React.Fragment>

  )
};


export default App;