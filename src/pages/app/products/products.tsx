import { ProductCard } from './product-card'
import { ProductFilter } from './product-filter'

export function Products() {
  return (
    <div className="pt-16 px-40 h-full flex gap-10 flex-col">
      <div>
        <h1 className="font-bold text-3xl text-gray-500 font-dm-sans">
          Seus produtos
        </h1>
        <span className="text-gray-300">
          Acesse gerencie a sua lista de produtos à venda
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <ProductFilter />

        <div className="col-span-2 grid grid-cols-2 gap-4 pb-2 overflow-x-scroll max-h-[675px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
