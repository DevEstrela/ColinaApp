import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../Welcome';
import SignIn from "../SignIn";
import Home from '../Home';
import TabRoutes from "./TabRoutes";

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