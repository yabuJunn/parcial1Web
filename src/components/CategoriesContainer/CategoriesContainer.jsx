import './CategoriesContainer.css'

//Componentes
import { CategorySelector } from '../CategorySelector/CategorySelector'
import { planDeViajes } from '../../utils/data'

export const CategoriesContainer = () => {
    return <>
        <div id="categoriesContainer">
            <h1>Avianca</h1>
            <p>¡Arma tu plan de viajes personalizado!</p>

            <CategorySelector data={planDeViajes.alimentacion} title={"Alimentacion"}></CategorySelector>
            <CategorySelector data={planDeViajes.hoteles} title={"Hoteles"}></CategorySelector>
            <CategorySelector data={planDeViajes.destinosdla} title={"Destinos de LA"}></CategorySelector>
        </div>
    </>
}