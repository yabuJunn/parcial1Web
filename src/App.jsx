import { useState } from 'react'
import './App.css'

//Components
import { CategoriesContainer } from './components/CategoriesContainer/CategoriesContainer'
import { PurchaseSummary } from './components/PurchaseSummary/PurchaseSummary'

function App() {
  const [category1, setCategory1] = useState(0)
  const [category2, setCategory2] = useState(0)
  const [category3, setCategory3] = useState(0)

  return (
    <>
      <PurchaseSummary></PurchaseSummary>
      <CategoriesContainer></CategoriesContainer>
    </>
  )
}

export default App
