import styles from './index.module.scss'
import classnames from 'classnames'
import { HashRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

const Login = React.lazy(() => import('./pages/login'))
const Auth = React.lazy(() => import('./pages/auth'))

function App() {
  return (
    <div className={classnames([styles.app, styles.fs])}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
