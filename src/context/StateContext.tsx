import { createContext } from 'react'

export type themesTypes = 'theme-a' | 'theme-b'

export interface ContextProps {
  theme: themesTypes
  setTheme: (time: themesTypes) => void;
}

export const StateContext = createContext({} as ContextProps)
