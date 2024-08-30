import './CategoriesContainer.css'

//Componentes
import { CategorySelector } from '../CategorySelector/CategorySelector'
import { planDeViajes } from '../../utils/data'

export const CategoriesContainer = ({ setCategories }) => {
    return <>
        <div id="categoriesContainer">
            <h1>Avianca</h1>
            <p>¡Arma tu plan de viajes personalizado!</p>

            <CategorySelector data={planDeViajes.alimentacion} title={"Alimentacion"} setCategory={setCategories.changeCategory1}></CategorySelector>
            <CategorySelector data={planDeViajes.hoteles} title={"Hoteles"} setCategory={setCategories.changeCategory1}></CategorySelector>
            <CategorySelector data={planDeViajes.destinosdla} title={"Destinos de LA"} setCategory={setCategories.changeCategory1}></CategorySelector>
        </div>
    </>
}