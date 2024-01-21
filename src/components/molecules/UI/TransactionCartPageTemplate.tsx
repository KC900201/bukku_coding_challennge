import { Fragment, useState, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  XMarkIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from '@heroicons/react/24/outline'

import {
  type ProductType,
  type TransactionHistoryType,
  transactionHistory,
} from '../../helpers'
import { calculateWACSalesPrice } from '../../hooks'

export interface TransactionPageInterface {
  open: boolean
  isMerchant: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  product: ProductType
}

function TransactionCartPageTemplate({
  open,
  isMerchant,
  setOpen,
  product,
}: TransactionPageInterface) {
  const [quantity, setQuantity] = useState<number>(1)
  const selectedPrice = isMerchant
    ? product.price
    : calculateWACSalesPrice(product.id)

  // confirm checkout
  const confirmCheckout = () => {
    const transactionCode = isMerchant ? 'PC-' : 'SL-'
    if (quantity <= 0) {
      window.alert('Please input the correct amount.')
    } else {
      const newTransactionRecord: TransactionHistoryType = {
        id: transactionHistory[transactionHistory.length - 1].id + 1,
        date: new Date(),
        transactionID: `${transactionCode}000003`,
        productID: product.id,
        merchantPrice: product.price,
        salesPrice: selectedPrice,
        quantity: quantity,
        isMerchantSales: isMerchant,
      }

      transactionHistory.push(newTransactionRecord)

      setOpen(false)
      window.alert('Your order has been confirmed and is now being processed.')
    }
  }

  // subTotal amount calculation
  const subTotal = useMemo(() => {
    return quantity * selectedPrice
  }, [quantity, selectedPrice])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        {/* Transaction cart info */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leaveTo="translate-x-full"
              >
                {/* Window panel starts */}
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  {/* Close panel */}
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      {/* Title and close window */}
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {isMerchant ? 'Purchase Cart' : 'Shopping Cart'}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {/* Item list  */}
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray200"
                          >
                            {/* Only single product */}
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{product.name}</h3>
                                    <p className="ml-4">
                                      {selectedPrice.toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    Qty{' '}
                                    <span className="rounded-[6px] font-bold text-gray-500 border-solid borders py-1 px-3">
                                      {quantity}
                                    </span>
                                  </p>

                                  <div className="flex items-center space-x-1">
                                    {quantity > 1 && (
                                      <button
                                        onClick={() =>
                                          setQuantity(quantity - 1)
                                        }
                                      >
                                        <MinusCircleIcon
                                          width={20}
                                          height={20}
                                        />
                                      </button>
                                    )}
                                    <button
                                      onClick={() => setQuantity(quantity + 1)}
                                    >
                                      <PlusCircleIcon width={20} height={20} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Subtotal and checkout section */}
                      <div className="border-t border-gray-200 my-5 px-4 py-6 sm:px-6">
                        <div className="w-full flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>MYR {subTotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes are included in the subtotal price
                        </p>
                        <div className="mt-6">
                          <button
                            onClick={confirmCheckout}
                            className="flex items-center justify-center rounded-md border
                                       border-transparent bg-indigo-600 px-6 py-3 text-base
                                       font-medium text-white shadow-sm hover:bg-indigo-700 w-full"
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
        {/* Transaction cart info end */}
      </Dialog>
    </Transition.Root>
  )
}

export default TransactionCartPageTemplate
