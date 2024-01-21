import TransactionCartPageTemplate from './UI/TransactionCartPageTemplate'
import { TransactionPageInterface } from './UI/TransactionCartPageTemplate'

function SalesTrannsactionPage({
  open,
  setOpen,
  isMerchant,
  product: salesProduct,
}: TransactionPageInterface) {
  // Include hooks to calculate sales price based on WAC

  return (
    <TransactionCartPageTemplate
      open={open}
      setOpen={setOpen}
      isMerchant={isMerchant}
      product={salesProduct}
    />
  )
}

export default SalesTrannsactionPage
