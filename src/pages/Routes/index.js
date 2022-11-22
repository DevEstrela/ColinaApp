/*
    TELA DE CONTROLE DAS PAGINAS EM PILHA DO APP
*/

//importando navegação em Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importando os componenetes das paginas que serão as rotas
import Welcome from '../Welcome';
import SignIn from "../SignIn";
import Home from '../Home';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}