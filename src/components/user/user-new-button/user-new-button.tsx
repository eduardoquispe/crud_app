import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

import { RootNavigatorPropList } from "../../../containers/navigator/navigator.types";
import SCREENS from "../../../constants/screens";
import { styles } from "./user-new-button.styles";

const UserNewButton = () => {
  const navigation = useNavigation<RootNavigatorPropList>()

  return (
    <Button
      icon={require('../../../assets/icons/plus-solid.png')}
      mode="contained"
      onPress={() => navigation.navigate(SCREENS.USERS_CONTROL)}
      style={styles.button}
    >
      Nuevo
    </Button>
  );
}

export default UserNewButton;