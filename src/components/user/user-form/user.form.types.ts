import {User} from '../../../interfaces/user';

/**
 * UserFormProps interface.
 * @interface UserFormProps
 * @since 1.0.0
 */
export interface UserFormProps {
  /** If the form is editing. */
  isEditing?: boolean;

  /** Default data. */
  defaultData?: User;
}

/**
 * UserFormInputs interface.
 * @interface UserFormInputs
 * @since 1.0.0
 */
export interface UserFormInputs {
  /** User id. */
  id?: number;

  /** First name of the user. */
  firstName: string;

  /** Last name of the user. */
  lastName: string;

  /** Email of the user. */
  email: string;

  /** Age of the user. */
  age: number;
}
