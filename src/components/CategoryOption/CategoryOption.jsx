import './CategoryOption.css'

export const CategoryOption = () => {
    return <>
        <input
            type="radio" name="emotion"
            id="sad" className="categoryOption" />
        <label htmlFor="sad">
            <div id='imageContainer'>
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <p>Titulo</p>
            <p>Precio</p>
        </label>
    </>
}