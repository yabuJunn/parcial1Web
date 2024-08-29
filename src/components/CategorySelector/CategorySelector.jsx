import './CategorySelector.css'

//Componentes
import { CategoryOption } from '../CategoryOption/CategoryOption'

export const CategorySelector = () => {
    return <>
        <div className="categoryContainer">
            <h3>Categoria 1</h3>
            <form id="categoryInputs">
                <CategoryOption></CategoryOption>
                <CategoryOption></CategoryOption>
                <CategoryOption></CategoryOption>
            </form>
        </div>
    </>
}