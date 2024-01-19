import './App.css'
import { products as sampleProducts } from './components/helpers/products'

import { Navbar, Footer } from './components/layouts'
import { LandingPage } from './components/molecules'

function App() {
  return (
    <>
      <Navbar />
      <LandingPage products={sampleProducts} />
      <Footer />
    </>
  )
}

export default App
