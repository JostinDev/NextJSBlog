import React from 'react'

import { NavStore } from '../store/nav-store'

export const storesContext = React.createContext({
  navStore: new NavStore()
})
