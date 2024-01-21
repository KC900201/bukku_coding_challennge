import { format as formatDate } from 'date-fns'

const TdStyle = {
  ThStyle: `border-none text-base`,
  TdStyle: `text-base text-gray-500 font-medium`,
}

// Continue here (1/21/2024)
function TransactionListPageTemplate() {
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
            Sales History
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
                <tr className="border-solid border-t-gray-600">
                  <td className={TdStyle.TdStyle}>
                    {formatDate('2/1/2024', 'do MMM yyyy')}
                  </td>
                  <td className={TdStyle.TdStyle}>SL-00001</td>
                  <td className={TdStyle.TdStyle}>Basic Tee</td>
                  <td className={TdStyle.TdStyle}>25.00</td>
                  <td className={TdStyle.TdStyle}>12</td>
                  <td className={TdStyle.TdStyle}>300.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionListPageTemplate
