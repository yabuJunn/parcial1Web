import './CategorySelector.css'

//Componentes
import { CategoryOption } from '../CategoryOption/CategoryOption'

export const CategorySelector = () => {
    return <>
        <div className="categoryContainer">
            <h3>Categoria 1</h3>
            <form id="categoryInputs">
                <CategoryOption titulo="hola" precio="1" imagen="https://picsum.photos/200/300?random=10"></CategoryOption>
                <CategoryOption titulo="adios" precio="2" imagen="https://picsum.photos/200/300?random=10"></CategoryOption>
                <CategoryOption titulo="buenas" precio="3" imagen="https://picsum.photos/200/300?random=10"></CategoryOption>
            </form>
        </div>
    </>
}