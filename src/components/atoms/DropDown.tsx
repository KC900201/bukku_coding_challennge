import React, { useEffect, useRef, useState } from 'react'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

interface commonInterface {
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>
}

interface DropdownItemInterface extends commonInterface {
  label: string
}

interface DropdownInterface extends commonInterface {
  isMerchant: boolean
}

const ClickOutsideHandler = (handler: () => void) => {
  const domNode = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const maybeHandler = (event: Event) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return domNode
}

const DropdownItem = ({ label, setIsMerchant }: DropdownItemInterface) => {
  const setAndRefreshWindow = () => {
    setIsMerchant(label === 'Buyer' ? false : true)
    document.location.reload()
  }

  return (
    <a
      onClick={setAndRefreshWindow}
      className="text-body-color dark:text-dark-6 hover:bg-[#F5F7FD]
                 dark:hover:bg-primary/5 hover:text-primary block
                 px-5 py-2 text-base cursor-pointer flex flex-wrap justify-between gap-5"
    >
      <ArrowsRightLeftIcon width={20} height={20} /> {label}
    </a>
  )
}

function DropDown({ isMerchant, setIsMerchant }: DropdownInterface) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const domNode = ClickOutsideHandler(() => {
    setDropdownOpen(false)
  })

  return (
    <>
      {/* <!-- ====== Dropdowns Section Start --> */}
      <section className="pt-2 pb-2 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {/* one */}
            <div ref={domNode} className="w-full px-4 sm:w-1/2 lg:w-/4">
              <div className="text-center">
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`bg-white w-max flex items-center rounded-[6px] px-5 py-[10px] text-base font-medium text-gray-700`}
                  >
                    {isMerchant ? 'Merchant' : 'Buyer'} site
                    <span className="pl-4">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md bg-white dark:bg-dark-2 py-[2px] transition-all w-full ${
                      dropdownOpen
                        ? 'top-full opacity-100 visible'
                        : 'top-[-110%] invisible opacity-0'
                    }`}
                  >
                    <DropdownItem
                      label={isMerchant ? 'Buyer' : 'Merchant'}
                      setIsMerchant={setIsMerchant}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
      {/* <!-- ====== Dropdowns Section End --> */}
    </>
  )
}

export default DropDown
