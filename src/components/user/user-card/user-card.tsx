import { Text, View } from "react-native";
import styles from "./user-card.styles";
import { UserCardProps as Props } from "./user-card.types";
import { Card } from "react-native-paper";
import { RootNavigatorPropList } from "../../../containers/navigator/navigator.types";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../../../constants/screens";

const UserCard: React.FC<Props> = (props) => {
  const { user } = props;

  const navigation = useNavigation<RootNavigatorPropList>()

  const { firstName, lastName, email, age } = user;
  const { navigate } = navigation;

  const onPress = () => navigate(SCREENS.USERS_CONTROL, { userId: user.id });

  return (
    <Card style={styles.container} onPress={onPress}>
      <Text style={styles.textTitle}>{firstName} {lastName}</Text>
      <View>
        <Text>Email: {email}</Text>
        <Text>Edad: {age}</Text>
      </View>
    </Card >
  );
}

export default UserCard;