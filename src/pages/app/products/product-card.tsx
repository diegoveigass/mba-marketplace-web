import { Link } from 'react-router-dom'

export function ProductCard() {
  return (
    <Link to="/products/1" className="bg-white rounded-3xl p-1 space-y-1">
      <div className="rounded-3xl overflow-hidden relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover h-48 w-full"
        />
        <div className="flex items-center justify-center gap-1 absolute top-2 right-2">
          <span className="bg-blue-dark uppercase px-2 py-1 text-white text-xs font-medium rounded-full">
            VENDIDO
          </span>
          <span className="bg-gray-400 uppercase px-2 py-1 text-white text-xs font-medium rounded-full">
            MÓVEL
          </span>
        </div>
      </div>
      <div className="pt-3 px-3 pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-400">Sofá</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-medium">R$</span>
            <span className="font-dm-sans font-bold text-lg">1.200,90</span>
          </div>
        </div>
        <p className="line-clamp-3 text-gray-300 text-sm">
          Sofá revestido em couro legítimo, com estrutura em madeira maciça e
          pés em metal cromado. Sofá revestido em couro legítimo, com estrutura
          em madeira maciça e pés em metal cromado. Sofá revestido em couro
          legítimo, com estrutura em madeira maciça e pés em metal cromado. Sofá
          revestido em couro legítimo, com estrutura em madeira maciça e pés em
          metal cromado. Sofá revestido em couro legítimo, com estrutura em
          madeira maciça e pés em metal cromado. Sofá revestido em couro
          legítimo, com estrutura em madeira maciça e pés em metal cromado.
        </p>
      </div>
    </Link>
  )
}
