import {StackNavigationProp} from '@react-navigation/stack';

import {UsersParams} from '../../screens/users/users.screen.types';
import {UserControlParams} from '../../screens/users-control/user-control.screen.types';

/**
 * NavigatorScreens interface.
 * @interface NavigatorScreens
 * @since 1.0.0
 */
export type NavigatorScreens = {
  /** Users screen. */
  Users?: UsersParams;

  /** UserControl screen. */
  UserControl?: UserControlParams;
};

/**
 * RootNavigatorPropList interface.
 * @interface RootNavigatorPropList
 * @since 1.0.0
 */
export type RootNavigatorPropList = StackNavigationProp<NavigatorScreens>;
