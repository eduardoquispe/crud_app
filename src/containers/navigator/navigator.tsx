import "react-native-gesture-handler";

import Toast from "react-native-toast-message";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import UsersScreen from "../../screens/users/users.screen";
import UserControlScreen from "../../screens/users-control/users-control.screen";
import SCREENS from "../../constants/screens";
import { UserControlParams } from "../../screens/users-control/user-control.screen.types";
import UserNewButton from "../../components/user/user-new-button/user-new-button";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.USERS}>
        <Stack.Screen
          name={SCREENS.USERS}
          component={UsersScreen}
          options={{
            title: "Usuarios",
            headerRight: () => <UserNewButton />,
          }}
        />
        <Stack.Screen
          name={SCREENS.USERS_CONTROL}
          component={UserControlScreen}
          options={({ route }) => {
            const { params } = route ?? {};
            const { userId } = params as UserControlParams ?? {};
            return { title: userId ? 'Editar Usuario' : 'Nuevo Usuario' };
          }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default Navigator;