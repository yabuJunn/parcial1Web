import { useState } from 'react'
import './App.css'

//Components
import { CategoriesContainer } from './components/CategoriesContainer/CategoriesContainer'
import { PurchaseSummary } from './components/PurchaseSummary/PurchaseSummary'

function App() {
  const [category1, setCategory1] = useState(["", 0])
  const [category2, setCategory2] = useState(["", 0])
  const [category3, setCategory3] = useState(["", 0])

  const changeCategory1 = (newValue) => {
    setCategory1(newValue)
  }

  const changeCategory2 = (newValue) => {
    setCategory2(newValue)
  }

  const changeCategory3 = (newValue) => {
    setCategory3(newValue)
  }

  const categories = {
    category1: category1,
    category2: category2,
    category3: category3
  }

  return (
    <>
      <PurchaseSummary categories={categories}></PurchaseSummary>
      <CategoriesContainer setCategories={{ changeCategory1, changeCategory2, changeCategory3 }}></CategoriesContainer>
    </>
  )
}

export default App
