import axios from "axios"
import { CreateUserRequest, createUserResponse, GetUserResponse, Response, UpdateUserRequest, UpdateUserResponse } from "./user.service.types";
import clientHttp from "../../config/client-http";

export const getUsers = async (): Promise<GetUserResponse[]> => {
  try {
    const response = await clientHttp.get<Response<GetUserResponse[]>>("/user");
    const { data } = response;
    const { success, message, data: users } = data;

    if (!success) {
      throw new Error(message);
    }

    return users;
  } catch (error) {
    throw new Error(error.message ?? 'Error al obtener los usuarios');
  }
}

export const getUser = async (id: number): Promise<GetUserResponse> => {
  try {
    const response = await clientHttp.get<Response<GetUserResponse>>(`/user/${id}`);

    const { data } = response;
    const { success, message, data: users } = data;

    if (!success) {
      throw new Error(message);
    }

    return users;
  } catch (error) {
    throw new Error(error.message ?? 'Error al obtener el usuario');
  }
}

export const createUser = async (user: CreateUserRequest): Promise<createUserResponse> => {
  try {
    const response = await clientHttp.post<Response<createUserResponse>>("/user", user);

    const { data } = response;
    const { success, message, data: userResponse } = data;

    if (!success) {
      throw new Error(message);
    }

    return userResponse;
  } catch (error) {
    throw new Error(error.message ?? 'Error al crear el usuario');
  }
}

export const updateUser = async (user: UpdateUserRequest): Promise<UpdateUserResponse> => {
  try {
    const response = await clientHttp.put<Response<UpdateUserResponse>>(`/user/${user.id}`, user);
    const { data } = response;
    const { success, message, data: userResponse } = data;

    if (!success) {
      throw new Error(message);
    }

    return userResponse;
  } catch (error) {
    throw new Error(error.message ?? 'Error al editar el usuario');
  }
}

export const deleteUser = async (id?: number): Promise<void> => {
  try {
    if (!id) {
      throw new Error("No se puede eliminar el usuario");
    }

    await clientHttp.delete<Response>(`/user/${id}`);
  } catch (error) {
    throw new Error(error.message ?? 'Error al eliminar el usuario');
  }
}