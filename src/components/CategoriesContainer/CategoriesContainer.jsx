import './CategoriesContainer.css'

//Componentes
import { CategorySelector } from '../CategorySelector/CategorySelector'

export const CategoriesContainer = () => {
    return <>
        <div id="categoriesContainer">
            <h1>Avianca</h1>
            <p>¡Arma tu plan de viajes personalizado!</p>

            <CategorySelector></CategorySelector>
        </div>
    </>
}