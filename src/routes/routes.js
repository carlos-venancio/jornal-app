import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/home/home'
import Categoria from '../pages/categoria/categoria'
import Artigo from '../pages/artigo/artigo'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Categoria" component={Categoria}/>
                <Stack.Screen name="Artigo" component={Artigo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 