import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios, { isAxiosError } from 'axios'
import { Header } from '../../components/header'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = axios.interceptors.response.use(
      response => response,
      error => {
        if (isAxiosError(error)) {
          const status = error.response?.data.statusCode
          const code = error.response?.data.message

          if (status === 401 && code === 'Unauthorized') {
            console.log('navigate kk')
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      }
    )

    return () => {
      axios.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
