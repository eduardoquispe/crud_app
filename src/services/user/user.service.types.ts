import {User} from '../../interfaces/user';

/**
 * GetUserResponse interface.
 * @interface GetUserResponse
 * @since 1.0.0
 */
export interface GetUserResponse extends User {}

/**
 * GetUsersResponse interface.
 * @interface GetUsersResponse
 * @since 1.0.0
 */
export interface GetUsersResponse {
  /** Users array. */
  users: User[];
}

/**
 * CreateUserRequest interface.
 * @interface CreateUserRequest
 * @since 1.0.0
 */
export interface CreateUserRequest extends Omit<User, 'id'> {}

/**
 * createUserResponse interface.
 * @interface createUserResponse
 * @since 1.0.0
 */
export interface createUserResponse extends User {}

/**
 * UpdateUserRequest interface.
 * @interface UpdateUserRequest
 * @since 1.0.0
 */
export interface UpdateUserRequest extends Omit<User, 'id'> {
  id?: number;
}

/**
 * UpdateUserResponse interface.
 * @interface UpdateUserResponse
 * @since 1.0.0
 */
export interface UpdateUserResponse extends User {}

/**
 * DeleteUserRequest interface.
 * @interface DeleteUserRequest
 * @since 1.0.0
 */
export interface DeleteUserRequest {
  /** User id. */
  id: number;
}

export interface Response<T = any> {
  success: boolean;
  message: string;
  data: T;
}
