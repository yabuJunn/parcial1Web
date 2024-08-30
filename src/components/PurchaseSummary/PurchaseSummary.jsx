import './PurchaseSummary.css'

export const PurchaseSummary = ({categories}) => {
    console.log(categories)

    console.log(categories[0])

    const value1 = categories[0]
    
    const value2 = categories[1]

    const value3 = categories[2]

    const total = value1[1] + value2[2] + value3[3] 

    console.log(total)

    return <>
        <div id="purchaseSummary">
            <p></p>
        </div>
    </>
}