import { Session } from '../models/session.model';
import { AuthActions, AuthActionTypes } from '../actions/auth';

export interface State {
  loggedIn: boolean;
  session: Session;
}

export const initialState: State = {
  loggedIn: false,
  session: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        loggedIn: true,
        session: action.payload.session
      };
    case AuthActionTypes.Logout:
      return initialState;
    default:
      return state;
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getSession = (state: State) => state.session;
