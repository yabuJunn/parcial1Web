import './CategoryOption.css'

// eslint-disable-next-line react/prop-types
export const CategoryOption = ({ titulo, precio, imagen, selected }) => {

    if (selected) {
        return <>
            <input
                type="radio" name="emotion"
                id={titulo} className="categoryOption" onChange={() => { }} />
            <label htmlFor={titulo}>
                <div id='imageContainer'>
                    <img src={imagen} alt="" />
                </div>
                <p>{titulo}</p>
                <p>{precio}</p>
            </label>
        </>
    } else {
        return <>
            <input
                type="radio" name="emotion"
                id={titulo} className="categoryOption" onChange={() => { }} />
            <label htmlFor={titulo}>
                <div id='imageContainer'>
                    <img src={imagen} alt="" />
                </div>
                <p>{titulo}</p>
                <p>{precio}</p>
            </label>
        </>
    }

}