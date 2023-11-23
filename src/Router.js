import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Code from "./components/Code";

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Code" component={Code} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}