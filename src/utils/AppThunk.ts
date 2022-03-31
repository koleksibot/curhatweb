import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/reducers';
import { ThunkAction } from 'redux-thunk';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
