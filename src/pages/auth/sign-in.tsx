import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
  ViewIcon,
} from 'hugeicons-react'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <div className="bg-white px-20 py-12 m-6 rounded-[32px] flex flex-col justify-between">
      <div className="space-y-12">
        <div>
          <h1 className="text-gray-500 font-dm-sans font-bold text-2xl">
            Acesse sua conta
          </h1>
          <p className="text-gray-300 text-sm">
            Informe seu e-mail e senha para entrar
          </p>
        </div>

        <div className="space-y-5">
          <div className="group">
            <label
              className="uppercase text-gray-300 text-xs group-focus-within:text-orange-dark"
              htmlFor="email"
            >
              E-mail
            </label>
            <div className="border-b border-zinc-300 flex items-center">
              <div className="flex flex-1 items-center gap-2">
                <Mail02Icon className="text-gray-200 group-focus-within:text-orange-dark" />
                <input
                  type="text"
                  id="email"
                  className="w-full outline-none py-4"
                  placeholder="Seu e-mail cadastrado"
                />
                <ViewIcon className="ml-auto text-gray-200" />
              </div>
            </div>
          </div>
          <div className="group">
            <label
              className="uppercase text-gray-300 text-xs group-focus-within:text-orange-dark"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="border-b border-zinc-300 flex items-center">
              <div className="flex flex-1 items-center gap-2">
                <AccessIcon className="text-gray-200 group-focus-within:text-orange-dark" />
                <input
                  type="text"
                  id="password"
                  className="w-full outline-none py-4"
                  placeholder="Sua senha de acesso"
                />
                <ViewIcon className="ml-auto text-gray-200" />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-5 py-4 bg-orange-base w-full rounded-lg text-white flex items-center justify-between hover:bg-orange-dark transition-colors"
        >
          Acessar
          <ArrowRight02Icon />
        </button>
      </div>

      <div className="space-y-5">
        <p className="text-gray-300">Ainda não tem uma conta?</p>
        <Link
          to="/sign-up"
          className="px-5 py-4 bg-transparent border border-orange-base w-full rounded-lg text-orange-base flex items-center justify-between hover:border-orange-dark hover:text-orange-dark transition-all"
        >
          Cadastrar
          <ArrowRight02Icon />
        </Link>
      </div>
    </div>
  )
}
