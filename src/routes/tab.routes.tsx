import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons"

import { Home } from "../screens/Home";
// import { Calculadora } from "../screens/Calculadora";
// import { Perfil } from "../screens/Perfil";


const { Navigator, Screen } = createBottomTabNavigator();


export default function TabRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            //headerLeftLabelVisible: true,
            //headerTitleAlign: 'center',
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: 'gray',
            tabBarInactiveTintColor: '#ffffff',
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: '#333399'
                //backgroundColor: '#ff6665'
            }
        }}>
            <Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} stroke={'white'} />,
                    tabBarLabel: 'Início'
                }}
            />

            <Screen
                name="Material"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="book" color={color} size={size} stroke={'white'} />,
                    tabBarLabel: 'Material'
                }}
            />

            <Screen
                name="Lazer"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="play" color={color} size={size} stroke={'white'} />,
                    tabBarLabel: 'Lazer'
                }}
            />

            <Screen
                name="Usuario"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} stroke={'white'} />,
                    tabBarLabel: 'Usuário'
                }}
            />
        </Navigator>
    )
}