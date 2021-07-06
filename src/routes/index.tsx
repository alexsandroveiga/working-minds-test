import { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

export function Routes (): ReactElement {
  return (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
  )
}
