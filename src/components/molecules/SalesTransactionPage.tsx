import { ProductType } from '../helpers/products'
import TransactionCartPageTemplate from './UI/TransactionCartPageTemplate'

function SalesTrannsactionPage({
  product: salesProduct,
}: {
  product: ProductType
}) {
  // Include hooks to calculate sales price based on WAC

  return <TransactionCartPageTemplate product={salesProduct} />
}

export default SalesTrannsactionPage
