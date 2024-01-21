import TransactionCartPageTemplate from './UI/TransactionCartPageTemplate'
import { TransactionPageInterface } from './UI/TransactionCartPageTemplate'

function PurchaseTransactionPage({
  open,
  setOpen,
  isMerchant,
  product: purchaseProduct,
}: TransactionPageInterface) {
  return (
    <TransactionCartPageTemplate
      open={open}
      setOpen={setOpen}
      isMerchant={isMerchant}
      product={purchaseProduct}
    />
  )
}

export default PurchaseTransactionPage
