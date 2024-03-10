import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import EventInspect from "./src/screens/Event/Inspect";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="EventInspect"
          options={{ headerShown: false }}
          component={EventInspect}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
