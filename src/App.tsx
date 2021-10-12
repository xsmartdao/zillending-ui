import React, { Fragment } from 'react'
import './App.less'
import {
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom'
import { matchRoutes } from 'react-router-config'

const Main: React.FC = () => {
  const location = useLocation()
  const routes = [
    { name: 'Dashboard', exact: true, path: '/' }
  ]
  const branch = matchRoutes(routes, location.pathname)
  const selectedPath = branch[0] ? branch[0].route.path : '/'
  return <Fragment>
    <h1 className={'text-lg'}>Hello, your new README</h1>
  {selectedPath}
  </Fragment>
}

function App () {
  return (
        <Router>
            <Main/>
        </Router>
  )
}

export default App
