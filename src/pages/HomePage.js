import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  const [isAuth, seIsAuth] = useState(true)

  useEffect(() => {
    if (isAuth === true) {
      navigate('/login');
    }
  }, [isAuth, navigate])

  return (<>
    <div>HomePage</div>
  </>
  )
}
