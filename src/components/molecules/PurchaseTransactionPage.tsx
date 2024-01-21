import { ProductType } from '../helpers/products'
import TransactionCartPageTemplate from './UI/TransactionCartPageTemplate'

function PurchaseTransactionPage({
  product: purchaseProduct,
}: {
  product: ProductType
}) {
  return <TransactionCartPageTemplate product={purchaseProduct} />
}

export default PurchaseTransactionPage
