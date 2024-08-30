import './CategorySelector.css'

//Componentes
import { CategoryOption } from '../CategoryOption/CategoryOption'

// eslint-disable-next-line react/prop-types
export const CategorySelector = ({ title, data }) => {
    console.log(title)
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
        
        case "Hoteles":
            return <>
                <div className="categoryContainer">
                    <h3>{title}</h3>
                    <form id="categoryInputs">
                        {data.map((hotel) => {
                            return <>
                                <CategoryOption key={hotel.nombre} titulo={hotel.nombre} precio={hotel.costo} imagen={hotel.imagen}></CategoryOption>
                            </>
                        })}
                    </form>
                </div>
            </>

        case "Destinos de LA":
            console.log(data)
            console.log(Object.values(data))
            return <>
                <div className="categoryContainer">
                    <h3>{title}</h3>
                    <form id="categoryInputs">
                        {Object.values(data).map((destino) => {
                            return <>
                                <CategoryOption key={destino.nombre} titulo={destino.nombre} precio={destino.precio} imagen={destino.imagen}></CategoryOption>
                            </>
                        })}
                    </form>
                </div>
            </>
        default:
            break;
    }

}