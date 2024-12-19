import { ScreenContainerProps as Props } from "react-native-screens";
import { View } from "react-native";

import styles from "./screen-template.layout.styles";

const ScreenTemplate: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

export default ScreenTemplate;