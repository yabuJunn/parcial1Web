import './App.css'

//Components
import { CategoriesContainer } from './components/CategoriesContainer/CategoriesContainer'
import { PurchaseSummary } from './components/PurchaseSummary/PurchaseSummary'

function App() {


  return (
    <>
      <PurchaseSummary></PurchaseSummary>
      <CategoriesContainer></CategoriesContainer>
    </>
  )
}

export default App
