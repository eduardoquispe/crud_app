import { StyleSheet } from "react-native";
import { $palette } from "../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: $palette.gray1,
    borderRadius: 24,
    padding: 20,
    elevation: 2,
    shadowColor: $palette.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default styles;