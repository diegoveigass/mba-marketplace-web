import { ArrowLeft01Icon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'

export function EditProduct() {
  const navigate = useNavigate()

  function handleNavigateToProducts() {
    navigate('/products')
  }

  return (
    <div>
      <button type="button" onClick={handleNavigateToProducts}>
        <ArrowLeft01Icon />
      </button>
      <h1>Edição do produto</h1>
    </div>
  )
}
