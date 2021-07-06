import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'

import GlobalStyle from './styles/global'

export default function App (): ReactElement {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}
