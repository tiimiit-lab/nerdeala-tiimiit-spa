import { themesTypes } from './StateContext';
import { StateProps } from './StateProvider';


type CoinsActionType =
  | { type: '[State] SetTheme', payload: themesTypes}



export const StateReducer = (state: StateProps, action: CoinsActionType): StateProps => {
  switch (action.type) {
    case '[State] SetTheme':
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}
