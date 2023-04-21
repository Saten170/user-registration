import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate, NavLink, useNavigate} from 'react-router-dom'

import RegisterUser from './pages/registrationform';
import UsersList from './pages/userslist';
import Login from './pages/loginform';
import {RouterNames} from "./router";
import UserDetails from "./pages/user-details";

function App() {
  const [token, setToken] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const tokenData = localStorage.getItem("token-test-lesson");
    if (tokenData) {
      setToken(tokenData)
    }
  }, [])

  const goToUsersList = () => {
    navigate(RouterNames.USERS_LIST)
  }

  return (
    <div className="App">

      {/* Example 1*/}

      <header>
        <button onClick={goToUsersList}>Click me</button>
        <ul>
          {token ?
            <li>
              <NavLink to={RouterNames.USER_DETAILS}>User details</NavLink>
            </li>
            :
            <>
              <li>
                <NavLink to={RouterNames.HOME}>Registration</NavLink>
              </li>
              <li>
                <NavLink to={RouterNames.USERS_LIST}>Users</NavLink>
              </li>
              <li>
                <NavLink to={RouterNames.LOGIN}>Login</NavLink>
              </li>
            </>
          }
        </ul>
      </header>

      {token ?
        <Routes>
          <Route element={<UserDetails/>} path={RouterNames.USER_DETAILS}/>
          <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
          <Route element={<Navigate to={'/'}/>} path='*'/>
        </Routes> :
        <Routes>
          <Route element={<RegisterUser/>} path={RouterNames.HOME}/>
          <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
          <Route element={<Login/>} path={RouterNames.LOGIN}/>
          <Route element={<Navigate to={'/'}/>} path='*'/>
        </Routes>
      }


      {/*  Example 2 */}

      {/*<header>*/}
      {/*  <ul>*/}
      {/*    {PublicRoutes.map((item, index) => {*/}
      {/*      return <li key={index}>*/}
      {/*        <NavLink to={item.path}>{item.linkName}</NavLink>*/}
      {/*      </li>*/}
      {/*    })}*/}
      {/*  </ul>*/}
      {/*</header>*/}
      {/*<Routes>*/}
      {/*  {PublicRoutes.map((item, index) => {*/}
      {/*    return <Route key={index} element={item.component} path={item.path}/>*/}
      {/*  })}*/}
      {/*  <Route element={<Navigate to={RouterNames.HOME}/>} path='*'/>*/}
      {/*</Routes>*/}

    </div>
  );
}

export default App;