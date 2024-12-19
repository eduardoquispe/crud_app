import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {NavigatorScreens} from '../../containers/navigator/navigator.types';
import SCREENS from '../../constants/screens';

export interface UserControlProps {
  navigation?: UserControlNavigation;
  route?: UserControlRoute;
}

/**
 * UserControlParams interface.
 * @interface UserControlParams
 * @since 1.0.0
 */
export interface UserControlParams {
  /** User id. */
  userId: number;
}

/**
 * UserControlNavigation interface.
 * @interface UserControlNavigation
 * @since 1.0.0
 */
export type UserControlNavigation = StackNavigationProp<
  NavigatorScreens,
  typeof SCREENS.USERS_CONTROL
>;

/**
 * UserControlRoute interface.
 * @interface UserControlRoute
 * @since 1.0.0
 */
export type UserControlRoute = RouteProp<
  NavigatorScreens,
  typeof SCREENS.USERS_CONTROL
>;
