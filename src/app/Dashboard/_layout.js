import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerContent from '../../components/Drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        drawerContent={DrawerContent}
        screenOptions={{
          headerStyle: { backgroundColor: '#232323' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerStyle: {
            backgroundColor: 'black',
            borderColor: 'red',       
            borderWidth: 1,           
          },
        }}
      >
        <Drawer.Screen
          name="(Tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: () => <MaterialCommunityIcons name={'home'} size={20} color={'white'} />,
            drawerLabelStyle: { color: 'white' },
          }}
        />
        <Drawer.Screen
          name="Settings" 
          options={{
            drawerLabel: 'Settings', 
            title: 'Settings',
            drawerIcon: () => <MaterialCommunityIcons name={'cog'} size={20} color={'white'} />,
            drawerLabelStyle: { color: 'white' },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}