import { format as formatDate } from 'date-fns'
import { TransactionHistoryType, products } from '../../helpers'
import { useEffect, useState } from 'react'

const TdStyle = {
  ThStyle: `border-none text-base`,
  TdStyle: `text-base text-gray-500 font-medium`,
}

function TransactionListPageTemplate({
  transactionHistory,
  isMerchant,
}: {
  transactionHistory: TransactionHistoryType[]
  isMerchant: boolean
}) {
  const [sortedTransactionHistory, setSortedTransactionHistory] = useState<
    TransactionHistoryType[]
  >(transactionHistory.sort((a, b) => a.date.getTime() - b.date.getTime()))

  useEffect(() => {
    setSortedTransactionHistory(
      transactionHistory.sort((a, b) => a.date.getTime() - b.date.getTime())
    )
  }, [transactionHistory, isMerchant])

  return (
    <section className="bg-white">
      <div
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24
                   lg:max-w-7xl lg:px-8mx-auto max-w-2xl px-4 py-16
                   sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        {/* Title */}
        <div className="grid gap-3">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            {isMerchant ? 'Purchase' : 'Sales'} History
          </h1>
          <h3 className="text-left text-xl tracking-tight text-gray-500">
            Check the status of recent orders
          </h3>
        </div>
        {/* History table */}
        <div className="w-full mt-5">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto bg-transparent">
              <thead className="text-left bg-white font-medium">
                <tr>
                  <th className={TdStyle.ThStyle}>Date</th>
                  <th className={TdStyle.ThStyle}>Transaction No.</th>
                  <th className={TdStyle.ThStyle}>Product Name</th>
                  <th className={TdStyle.ThStyle}>Price / Unit</th>
                  <th className={TdStyle.ThStyle}>Quantity</th>
                  <th className={TdStyle.ThStyle}>Total Amount</th>
                </tr>
              </thead>
              <tbody className="text-left bg-white font-medium">
                {sortedTransactionHistory.map(
                  (transHistoryItem: TransactionHistoryType) => {
                    const totalAmount = transHistoryItem.isMerchantSales
                      ? transHistoryItem.merchantPrice *
                        transHistoryItem.quantity
                      : (transHistoryItem.salesPrice as number) *
                        transHistoryItem.quantity

                    const selectedProduct = products.find(
                      (item) => item.id === transHistoryItem.productID
                    )

                    const selectedPrice = transHistoryItem.isMerchantSales
                      ? transHistoryItem.merchantPrice
                      : transHistoryItem.salesPrice

                    return (
                      <tr
                        className="border-solid border-t-gray-600"
                        key={`history-id-${transHistoryItem.id}`}
                      >
                        <td className={TdStyle.TdStyle}>
                          {formatDate(transHistoryItem.date, 'do MMM yyyy')}
                        </td>
                        <td className={TdStyle.TdStyle}>
                          {transHistoryItem.transactionID}
                        </td>
                        <td className={TdStyle.TdStyle}>
                          {selectedProduct?.name ?? 'NA'}
                        </td>
                        <td className={TdStyle.TdStyle}>
                          {selectedPrice?.toFixed(2) ?? '0.00'}
                        </td>
                        <td className={TdStyle.TdStyle}>
                          {transHistoryItem.quantity}
                        </td>
                        <td className={TdStyle.TdStyle}>
                          {totalAmount.toFixed(2)}
                        </td>
                      </tr>
                    )
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionListPageTemplate
