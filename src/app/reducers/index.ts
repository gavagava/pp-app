import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { RouterStateUrl } from '../shared/utils';

import * as _ from 'lodash';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export const getLanguage = createSelector(
  (state: State) => state.router,
  (router: fromRouter.RouterReducerState<RouterStateUrl>) => _.get(router.state.queryParams, 'locale')
);

export const getRepo = createSelector(
  (state: State) => state.router,
  (router: fromRouter.RouterReducerState<RouterStateUrl>) => _.get(router.state.queryParams, 'repo')
);
