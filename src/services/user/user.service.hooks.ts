import {useMutation, useQuery} from '@tanstack/react-query';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from './user.service';

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};

export const useGetUser = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUser,
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};
