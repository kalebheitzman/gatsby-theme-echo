// import libs
import React, { useState, useEffect } from 'react'

// import components
import Context from '../Context/Context'

export default ({ children }) => {

  const [ view, setView ] = useState('lobby')
  const [ aside, setAside ] = useState('schedule')
  const [ main, setMain ] = useState('mainStage')
  const [ jitsi, setJitsi ] = useState(false)
  const [ user, setUser ] = useState(false)

  useEffect(() => {
    let user = window.localStorage.getItem('echoUser')

    if (null !== user) {
      user = JSON.parse(user)
      setUser(user)
    }

    if (typeof window !== 'undefined' && window.location.hash !== '') {
      const view = window.location.hash.substring(1)
      setView(view)
    }
  }, [])
  
  return (
    <Context.Provider
      value={{
        view, main, aside, jitsi, user,
        setView, setMain, setAside, setJitsi, setUser,
        logout: () => {
          setUser(false)
          window.localStorage.removeItem('echoUser')
        },
        navigate: (view) => {
          setView(view)
          if (typeof window !== 'undefined') {
            window.location.hash = view
          }
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}