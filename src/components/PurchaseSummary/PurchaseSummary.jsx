import './PurchaseSummary.css'

export const PurchaseSummary = ({categories}) => {
    console.log(categories)

    const value1 = categories[0]
    
    const value2 = categories[1]

    const value3 = categories[2]

    const total = categories.category1[1] + categories.category2[1] + categories.category3[1]

    console.log(total)

    return <>
        <div id="purchaseSummary">
            <p>Total es: {total}</p>
        </div>
    </>
}