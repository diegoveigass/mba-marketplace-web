import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>app cabeçalho</h1>

      <Outlet />
    </div>
  )
}
