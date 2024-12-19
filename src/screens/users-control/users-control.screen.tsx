import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

import UserForm from "../../components/user/user-form/user-form";
import ScreenTemplate from "../../layouts/screen-template/screen-template.layout";
import { UserControlProps as Props, UserControlRoute } from "./user-control.screen.types";
import styles from "./user-control.screen.styles";
import { useGetUser } from "../../services/user/user.service.hooks";
import { $palette } from "../../styles/variables";

const UserControlScreen: React.FC<Props> = (props) => {
  const route = useRoute<UserControlRoute>();

  const { userId } = route.params ?? {};

  const { data: user, isLoading } = useGetUser(userId!);

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        {
          isLoading ?
            <ActivityIndicator size="small" color={$palette.purple1} />
            : <UserForm isEditing={Boolean(userId)} defaultData={user} />
        }
      </View>
    </ScreenTemplate>
  );
}

export default UserControlScreen;