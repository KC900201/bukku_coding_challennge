import { ProductInterface } from '../helpers/products'

function PurchaseTransactionPage({
  products,
}: {
  products: ProductInterface[]
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
          Purchase Cart
        </h1>
        {/* Product list and order summary (WIP) */}
        <div className="flex flex-nowrap justify-between">
          {/* Product list (WIP) */}
          {products.map((product) => (
            <div key={product.id} className="relative">
              {product.name}
            </div>
          ))}
          {/* Order summary */}
        </div>
      </div>
    </section>
  )
}

export default PurchaseTransactionPage
