import './App.css'
import { products as sampleProducts } from './components/helpers/products'

import { Navbar } from './components/layouts'
import { LandingPage } from './components/molecules'

function App() {
  return (
    <>
      <Navbar />
      <LandingPage products={sampleProducts} />
    </>
  )
}

export default App
