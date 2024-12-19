import { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";


import { defaultValues, userFormSchema } from "./user.form.utils";
import { UserFormInputs, UserFormProps as Props } from "./user.form.types";
import { useCreateUser, useDeleteUser, useUpdateUser } from "../../../services/user/user.service.hooks";
import TextInput from "../../global/text-input/text-input";
import styles from "./user-form.styles";
import { RootNavigatorPropList } from "../../../containers/navigator/navigator.types";
import DialogConfirm from "../../global/dialog-confirm/dialog-confirm";

const UserForm: React.FC<Props> = (props) => {
  const { isEditing, defaultData } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const navigation = useNavigation<RootNavigatorPropList>()
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: updateUser } = useUpdateUser();
  const { mutateAsync: deleteUser } = useDeleteUser();
  const queryClient = useQueryClient();
  const form = useForm<UserFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
    defaultValues: defaultValues(defaultData),
  })

  const { handleSubmit } = form;

  const handleInvalidateQuery = () => {
    queryClient.invalidateQueries({ queryKey: ['users'] });
    queryClient.invalidateQueries({ queryKey: ['user'] });
  }

  const handleDelete = async () => {
    try {
      setIsDialogVisible(false)
      setIsLoading(true)
      await deleteUser(defaultData?.id);
      handleInvalidateQuery()
      navigation.goBack()
    } catch (error) {
      console.log({ error })
      Toast.show({
        type: 'error',
        text1: 'Error al eliminar el usuario'
      });
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: UserFormInputs) => {
    try {
      setIsLoading(true);
      if (isEditing) {
        await updateUser({ id: defaultData?.id, ...data });
        Toast.show({
          type: 'success',
          text1: 'Usuario actualizado exitosamente'
        });
        navigation.goBack();
        return;
      }
      await createUser(data);
      Toast.show({
        type: 'success',
        text1: 'Usuario creado exitosamente'
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: isEditing ? 'Error al editar el usuario' : 'Error al crear el usuario',
      });
    } finally {
      handleInvalidateQuery()
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <FormProvider {...form}>
          <TextInput
            mode="outlined"
            label="Nombre"
            {...form.register("firstName")}
          />
          <TextInput
            mode="outlined"
            label="Apellido"
            {...form.register("lastName")} />
          <TextInput
            mode="outlined"
            label="Email"
            keyboardType="email-address"
            {...form.register("email")}
          />
          <TextInput
            mode="outlined"
            label="Edad"
            keyboardType="numeric"
            {...form.register("age")}
          />
        </FormProvider>
      </View>
      <View>
        {
          isEditing ?
            <Button
              mode="outlined"
              loading={isLoading}
              disabled={isLoading}
              style={styles.buttonDelete}
              onPress={() => setIsDialogVisible(true)}
            >
              Eliminar
            </Button> : null
        }
        <Button
          mode="contained"
          loading={isLoading}
          disabled={isLoading}
          onPress={handleSubmit(onSubmit)}
        >
          Guardar
        </Button>
      </View>
      <DialogConfirm
        visible={isDialogVisible}
        title="¿Estás seguro?"
        content="Esta seguro que desea eliminar este usuario?"
        confirmText="Eliminar"
        onDismiss={() => setIsDialogVisible(false)}
        onCancel={() => setIsDialogVisible(false)}
        onConfirm={handleDelete}
      />
    </View>
  );
}

export default UserForm;