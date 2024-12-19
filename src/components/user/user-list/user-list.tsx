import { FlatList, Text, View } from "react-native";

import UserCard from "../user-card/user-card";
import { useGetUsers } from "../../../services/user/user.service.hooks";
import { ActivityIndicator } from "react-native-paper";
import { useState } from "react";
import { styles } from "./user-list.styles";
import { $palette } from "../../../styles/variables";

const UserList = () => {

  const { data = [], isLoading, isError, refetch } = useGetUsers();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (isLoading) {
    return <ActivityIndicator size="small" color={$palette.purple1} />
  }

  if (isError) {
    return <Text style={styles.errorText}>Error al cargar usuarios.</Text>;
  }

  return (
    <FlatList
      style={{ padding: 16 }}
      contentContainerStyle={{ paddingBottom: 36 }}
      data={data}
      renderItem={({ item }) => <UserCard user={item} />}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      ListEmptyComponent={<Text style={styles.emptyText}>No hay usuarios disponibles.</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default UserList;