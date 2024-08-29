import './CategorySelector.css'

//Componentes
import { CategoryOption } from '../CategoryOption/CategoryOption'

// eslint-disable-next-line react/prop-types
export const CategorySelector = ({ title, data }) => {
    switch (title) {
        case "Alimentacion":
            return <>
                <div className="categoryContainer">
                    <h3>{title}</h3>
                    <form id="categoryInputs">
                        {data.map((desayuno) => {
                            return <>
                                <CategoryOption key={desayuno.titulo} titulo={desayuno.titulo} precio={desayuno.precio} imagen={desayuno.imagen}></CategoryOption>
                            </>
                        })}
                    </form>
                </div>
            </>


        default:
            break;
    }

}