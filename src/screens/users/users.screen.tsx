import React from "react";
import ScreenTemplate from "../../layouts/screen-template/screen-template.layout";
import UserList from "../../components/user/user-list/user-list";
import styles from "./users.screen.styles";
import { View } from "react-native";

const UsersScreen = () => {

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <UserList />
      </View>
    </ScreenTemplate>
  );
};

export default UsersScreen;
