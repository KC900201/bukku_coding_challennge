import { useMemo } from 'react'
import TransactionListPageTemplate from './UI/TransactionListPageTemplate'
import { transactionHistory } from '../helpers'

function SalesTransactionListPage({ isMerchant }: { isMerchant: boolean }) {
  const salesTransactionList = useMemo(
    () => transactionHistory.filter((item) => !item.isMerchantSales),
    []
  )

  return (
    <TransactionListPageTemplate
      transactionHistory={salesTransactionList}
      isMerchant={isMerchant}
    />
  )
}

export default SalesTransactionListPage
