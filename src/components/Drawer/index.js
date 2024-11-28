import { View, Image, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
    const router = useRouter();
    const year = new Date().getFullYear();

    const handleLogout = () => {
        Alert.alert(
            "Confirm Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        router.replace('/');
                    }
                }
            ],
            { cancelable: false }
        );
    };

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, backgroundColor: '#232323' }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
                style={{ backgroundColor: '#232323' }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20 + top,
                        paddingBottom: 20
                    }}
                >
                    <Image source={require('../../assets/DarkModeLogo.png')} style={{ alignSelf: 'center', height: 100, width: 93 }} />
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Logout"
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name='logout' color={'white'} size={size} />
                    )}
                    labelStyle={{ marginLeft: 10, color: 'white' }}
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20 + bottom
                }}
            >
                <Text style={{ color: 'white' }}> 
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View>
        </View>
    );
}