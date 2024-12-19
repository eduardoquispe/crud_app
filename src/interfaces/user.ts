/**
 * User interface.
 * @interface User
 * @since 1.0.0
 */
export interface User {
  /** Id of the user. */
  id: number;

  /** First name of the user. */
  firstName: string;

  /** Last name of the user. */
  lastName: string;

  /** Email of the user. */
  email: string;

  /** Age of the user. */
  age: number;
}
