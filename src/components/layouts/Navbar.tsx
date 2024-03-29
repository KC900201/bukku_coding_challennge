import React from 'react'

import { DropDown } from '../atoms'

type Props = {
  children: React.ReactNode
  onRedirectPage: () => void
}

type NavbarProps = {
  isMerchant: boolean
  redirectPage: React.Dispatch<React.SetStateAction<string>>
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>
}

const ListItem = ({ children, onRedirectPage }: Props) => {
  return (
    <>
      <li>
        <a
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex cursor-pointer"
          onClick={onRedirectPage}
        >
          {children}
        </a>
      </li>
    </>
  )
}

const Navbar = ({ redirectPage, isMerchant, setIsMerchant }: NavbarProps) => {
  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <ListItem onRedirectPage={() => redirectPage('landing')}>
                    Home
                  </ListItem>
                  {isMerchant && (
                    <ListItem
                      onRedirectPage={() => redirectPage('purchase_history')}
                    >
                      Purchase History
                    </ListItem>
                  )}
                  {!isMerchant && (
                    <ListItem
                      onRedirectPage={() => redirectPage('sales_history')}
                    >
                      Sales History
                    </ListItem>
                  )}
                </ul>
              </nav>
            </div>
            {/* Dropdown list */}
            <div className="justify-end pr-16 sm:flex lg:pr-0">
              <DropDown isMerchant={isMerchant} setIsMerchant={setIsMerchant} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
