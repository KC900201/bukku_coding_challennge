import { type ProductType } from '../helpers/products'

function LandingPage({ products }: { products: ProductType[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Today's items
        </h2>
        {/* Product listing */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Image display */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt ?? 'sample image'}
                  className="h-full w-full object-center lg:h-full lg:w-full"
                />
              </div>
              {/* Product description */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute pt-2 inset-0"
                      >
                        {product.name}
                      </span>
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {`MYR ${product.price.toFixed(2)}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingPage
