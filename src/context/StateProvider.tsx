import { FC, ReactNode, useReducer } from 'react'
import { StateContext, themesTypes } from './StateContext'
import { StateReducer } from './StateReducer'

export interface StateProps {
  theme: themesTypes
}

interface StateProviderPros {
  children: ReactNode
}
const COINS_INITIAL_STATE: StateProps = {
    theme: 'theme-a'
}

export const StateProvider: FC<StateProviderPros> = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, COINS_INITIAL_STATE)

  const setTheme = async (theme: themesTypes) => {
    dispatch({ type: '[State] SetTheme', payload: theme })
  }

  return (
    <StateContext.Provider
      value={{
        ...state,
        setTheme
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
