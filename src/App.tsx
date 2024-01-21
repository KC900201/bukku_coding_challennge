import { useState } from 'react'

import './App.css'
import { products as sampleProducts } from './components/helpers/products'

import { Navbar, Footer } from './components/layouts'
import {
  LandingPage,
  PurchaseTransactionListPage,
  SalesTransactionListPage,
} from './components/molecules'

function App() {
  const [page, setPage] = useState('landing')
  const [isMerchant, setIsMerchant] = useState(false)

  return (
    <>
      <Navbar
        redirectPage={setPage}
        isMerchant={isMerchant}
        setIsMerchant={setIsMerchant}
      />
      {page === 'landing' && (
        <LandingPage products={sampleProducts} isMerchant={isMerchant} />
      )}
      {page === 'purchase_history' && (
        <PurchaseTransactionListPage isMerchant={isMerchant} />
      )}
      {page === 'sales_history' && (
        <SalesTransactionListPage isMerchant={isMerchant} />
      )}

      <Footer />
    </>
  )
}

export default App
