import {
  ArrowUp01Icon,
  SaleTag02Icon,
  Search01Icon,
  Tick02Icon,
} from 'hugeicons-react'
import * as Select from '@radix-ui/react-select'

export function ProductFilter() {
  return (
    <div className="bg-white p-6 rounded-3xl space-y-10 h-80">
      <div className="space-y-6">
        <h2 className="font-bold font-dm-sans text-lg text-gray-300">
          Filtrar
        </h2>
        <div className="space-y-5">
          <div className="group border-b border-zinc-300 flex items-center">
            <div className="flex flex-1 items-center gap-2">
              <Search01Icon className="text-gray-200 group-focus-within:text-orange-dark" />
              <input
                type="search"
                id="search"
                className="w-full outline-none py-4"
                placeholder="Pesquisar"
              />
            </div>
          </div>
          <div className="group border-b border-zinc-300 flex items-center">
            <div className="flex flex-1 items-center gap-2">
              <SaleTag02Icon className="text-gray-200 group-focus-within:text-orange-dark" />
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
                      value="sell"
                    >
                      <Select.ItemText asChild>
                        <span className="text-gray-400">Vendido</span>
                      </Select.ItemText>
                      <Select.ItemIndicator>
                        <Tick02Icon className="size-6" />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item
                      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-gray-50"
                      value="unavailable"
                    >
                      <Select.ItemText asChild>
                        <span className="text-gray-400 data-[state=checked]:text-orange-base">
                          Indisponível
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

      <button
        type="submit"
        className="px-5 py-4 bg-orange-base w-full rounded-lg text-white flex items-center justify-center hover:bg-orange-dark transition-colors"
      >
        Aplicar filtro
      </button>
    </div>
  )
}
