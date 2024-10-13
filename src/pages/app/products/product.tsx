import {
  ArrowLeft01Icon,
  ArrowLeft02Icon,
  ArrowUp01Icon,
  ImageUploadIcon,
  Tick02Icon,
  UnavailableIcon,
} from 'hugeicons-react'
import { useNavigate, useParams } from 'react-router-dom'
import * as Select from '@radix-ui/react-select'

export function Product() {
  const { id } = useParams()

  const hasProductToEdit = !!id

  const navigate = useNavigate()

  function handleNavigateToProducts() {
    navigate('/products')
  }

  return (
    <div className="pt-16 px-40 h-full flex gap-10 flex-col">
      <div className="flex items-start justify-between">
        <div>
          {hasProductToEdit && (
            <button
              type="button"
              onClick={handleNavigateToProducts}
              className="flex items-center justify-center gap-2 group"
            >
              <ArrowLeft02Icon className="text-orange-base size-5 group-hover:text-orange-dark" />
              <span className="font-medium text-sm text-orange-base group-hover:text-orange-dark">
                Voltar
              </span>
            </button>
          )}
          <h1 className="font-bold text-3xl text-gray-500 font-dm-sans">
            Novo produto
          </h1>
          <span className="text-gray-300">
            Cadastre um produto para venda no marketplace
          </span>
        </div>
        {hasProductToEdit && (
          <div className="self-end flex items-center justify-center gap-4">
            <button
              type="button"
              className="text-orange-base flex items-center gap-2 font-medium text-sm hover:text-orange-dark"
            >
              <Tick02Icon className="size-5" />
              Marcar como vendido
            </button>
            <button
              type="button"
              className="text-orange-base flex items-center gap-2 font-medium text-sm hover:text-orange-dark"
            >
              <UnavailableIcon className="size-5" />
              Desativar anúncio
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="h-96 bg-shape flex items-center justify-center flex-col rounded-3xl gap-4">
          <ImageUploadIcon className="size-10 text-orange-base" />
          <p className="text-gray-300 text-sm max-w-40 text-center">
            Selecione a imagem do produto
          </p>
        </div>
        <div className="col-span-2 bg-white p-8 rounded-3xl flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="font-dm-sans font-bold text-lg text-gray-300">
              Dados do produto
            </h2>
            {hasProductToEdit && (
              <span className="bg-blue-dark uppercase px-2 py-1 text-white text-xs font-medium rounded-full">
                anunciado
              </span>
            )}
          </div>
          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div className="group flex-1">
                  <label
                    className="uppercase text-gray-300 text-xs group-focus-within:text-orange-dark"
                    htmlFor="title"
                  >
                    Título
                  </label>
                  <div className="border-b border-zinc-300 flex items-center">
                    <div className="flex flex-1 items-center gap-2">
                      <input
                        type="text"
                        id="title"
                        className="w-full outline-none py-4"
                        placeholder="Nome do produto"
                      />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <label
                    className="uppercase text-gray-300 text-xs group-focus-within:text-orange-dark"
                    htmlFor="price"
                  >
                    Preço
                  </label>
                  <div className="border-b border-zinc-300 flex items-center">
                    <div className="flex flex-1 items-center gap-2">
                      <span>R$</span>

                      <input
                        type="text"
                        id="price"
                        className="w-full outline-none py-4"
                        placeholder="0,00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group">
                  <label
                    className="uppercase text-gray-300 text-xs group-focus-within:text-orange-dark"
                    htmlFor="description"
                  >
                    Descrição
                  </label>
                  <div className="border-b border-zinc-300 flex items-center">
                    <div className="flex flex-1 items-center gap-2">
                      <textarea
                        id="description"
                        className="w-full outline-none py-4"
                        placeholder="Escreva detalhes sobre o produto, tamanho, características"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="group">
                  <label
                    className="uppercase text-gray-300 text-xs group-focus-within:text-orange-dark"
                    htmlFor="category"
                  >
                    Categoria
                  </label>
                  <div className="border-b border-zinc-300 flex items-center">
                    <div className="flex flex-1 items-center gap-2">
                      <Select.Root>
                        <Select.Trigger className="w-full py-4 outline-none flex items-center justify-between data-[placeholder]:text-gray-200">
                          <Select.Value placeholder="Status" />
                          <Select.Icon>
                            <ArrowUp01Icon />
                          </Select.Icon>
                        </Select.Trigger>
                        <Select.Portal>
                          <Select.Content
                            side="bottom"
                            sideOffset={8}
                            position="popper"
                            className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
                          >
                            <Select.Item
                              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-gray-50"
                              value="toy"
                            >
                              <Select.ItemText asChild>
                                <span className="text-gray-400">Brinquedo</span>
                              </Select.ItemText>
                              <Select.ItemIndicator>
                                <Tick02Icon className="size-6" />
                              </Select.ItemIndicator>
                            </Select.Item>
                            <Select.Item
                              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-gray-50"
                              value="movel"
                            >
                              <Select.ItemText asChild>
                                <span className="text-gray-400 data-[state=checked]:text-orange-base">
                                  Móvel
                                </span>
                              </Select.ItemText>
                              <Select.ItemIndicator>
                                <Tick02Icon className="size-6 text-orange-base" />
                              </Select.ItemIndicator>
                            </Select.Item>
                          </Select.Content>
                        </Select.Portal>
                      </Select.Root>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-5 py-4 h-14  bg-transparent border border-orange-base rounded-lg w-full text-orange-base font-semibold flex justify-center items-center gap-2 hover:border-orange-dark hover:text-orange-dark transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-4 h-14  bg-orange-base rounded-lg w-full text-white flex justify-center items-center gap-2 font-semibold hover:bg-orange-dark transition-colors"
              >
                Salvar e publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
