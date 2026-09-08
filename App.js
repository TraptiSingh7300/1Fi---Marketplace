import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import TopBrandsScreen from './screens/TopBrandsScreen';
import NearbyStoresScreen from './screens/NearbyStoresScreen';
import MarketplaceScreen from './screens/MarketPlaceScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 },
            tabBarIndicatorStyle: { backgroundColor: '#0052FF' },
          }}
        >
          <Tab.Screen name="Top Brands" component={TopBrandsScreen} />
          <Tab.Screen name="Nearby Stores" component={NearbyStoresScreen} />
          <Tab.Screen name="1Fi Marketplace" component={MarketplaceScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}