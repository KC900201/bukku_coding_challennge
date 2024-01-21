import { useMemo } from 'react'
import TransactionListPageTemplate from './UI/TransactionListPageTemplate'
import { transactionHistory } from '../helpers'

function PurchaseTransactionListPage({ isMerchant }: { isMerchant: boolean }) {
  const purchaseTransactionList = useMemo(
    () => transactionHistory.filter((item) => !!item.isPurchase),
    []
  )

  return (
    <TransactionListPageTemplate
      transactionHistory={purchaseTransactionList}
      isMerchant={isMerchant}
    />
  )
}

export default PurchaseTransactionListPage
