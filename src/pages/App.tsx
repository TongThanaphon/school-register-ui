import React from 'react'
import { Route } from 'react-router-dom'

import School from './index'
import Login from './login'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={School} />
      <Route path="/login" component={Login} />
    </div>
  )
}

export default App
