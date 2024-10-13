import { Link, NavLink, Outlet } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { ChartHistogramIcon, PackageIcon, PlusSignIcon } from 'hugeicons-react'

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full flex justify-between items-center py-4 px-5">
        <img src={logoImg} alt="" className="w-14 h-10" />

        <nav className="flex items-center justify-center gap-2">
          <NavLink
            to="/"
            className="group flex items-center justify-center gap-1 px-4 py-2 aria-[current=page]:bg-shape rounded-xl"
          >
            <ChartHistogramIcon className="text-gray-300 group-[.active]:text-orange-base" />
            <span className="text-gray-300 group-[.active]:text-orange-base group-[.active]:font-semibold">
              Dashboard
            </span>
          </NavLink>
          <NavLink
            to="/products"
            className="group flex items-center justify-center gap-1 px-4 py-2 aria-[current=page]:bg-shape rounded-xl"
          >
            <PackageIcon className="text-gray-300 group-[.active]:text-orange-base" />
            <span className="text-gray-300 group-[.active]:text-orange-base group-[.active]:font-semibold">
              Produtos
            </span>
          </NavLink>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/products/new"
            className="px-5 py-4 h-10 bg-orange-base rounded-lg text-white flex items-center gap-2 hover:bg-orange-dark transition-colors"
          >
            <PlusSignIcon />
            Novo produto
          </Link>

          <div className="size-12">
            <img
              src="https://github.com/diegoveigass.png"
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </header>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
