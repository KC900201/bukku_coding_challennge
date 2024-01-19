import { useState } from 'react'

import './App.css'
import { products as sampleProducts } from './components/helpers/products'

import { Navbar, Footer } from './components/layouts'
import {
  LandingPage,
  PurchaseTransactionPage,
  PurchaseTransactionListPage,
  SalesTrannsactionPage,
  SalesTransactionListPage,
} from './components/molecules'

function App() {
  const [page, setPage] = useState('landing')

  return (
    <>
      <Navbar redirectPage={setPage} />
      {page === 'landing' && <LandingPage products={sampleProducts} />}
      {page === 'purchase' && (
        <PurchaseTransactionPage products={sampleProducts} />
      )}
      {page === 'purchase_history' && <PurchaseTransactionListPage />}
      {page === 'sales' && <SalesTrannsactionPage products={sampleProducts} />}
      {page === 'sales_history' && <SalesTransactionListPage />}

      <Footer />
    </>
  )
}

export default App
