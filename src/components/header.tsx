import {
  ChartHistogramIcon,
  Logout01Icon,
  PackageIcon,
  PlusSignIcon,
} from 'hugeicons-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import logoImg from '../assets/logo.svg'
import { useSignOutControllerHandle } from '../api/sessions/sessions'
import axios, { type AxiosError } from 'axios'
import { toast } from 'sonner'

export function Header() {
  const navigate = useNavigate()
  const { mutateAsync: signOut } = useSignOutControllerHandle()

  async function handleSignOut() {
    try {
      await signOut()
      navigate('/sign-in')
    } catch (err) {
      const errors = err as Error | AxiosError

      if (axios.isAxiosError(errors)) {
        toast.error(errors.response?.data.message)
        return
      }
      throw new Error(errors.message)
    }
  }

  return (
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

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="size-12 outline-none">
              <img
                src="https://github.com/diegoveigass.png"
                className="rounded-lg"
                alt=""
              />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[120px] rounded-md bg-shape p-1"
              sideOffset={5}
            >
              <DropdownMenu.Item
                className="text-sm flex items-center justify-between px-4 py-2 h-[25px] text-red-900 select-none rounded-md outline-none data-[highlighted]:bg-red-400"
                onClick={handleSignOut}
              >
                Logout
                <Logout01Icon className="size-4" />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  )
}
