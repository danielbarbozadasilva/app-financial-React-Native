import {applyMiddleware, combineReducers, createStore, Dispatch} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import AuthReducer from './auth/auth.reducer';
import AccountReducer from './account/account.reducer';
import TransactionReducer from './transaction/transaction.reducer'
import FinancialReducer from './financial_assets/financial_assets.reducer'
import ClientReducer from './client/client.reducer'

const reducers = combineReducers({
  auth: AuthReducer,  
  account: AccountReducer,
  transaction: TransactionReducer,
  financial: FinancialReducer,
  client: ClientReducer
});

const middlewares = [thunk, multi];

const compose = applyMiddleware(...middlewares);

const store = createStore(reducers, compose);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
