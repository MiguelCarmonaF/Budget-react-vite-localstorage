import { useEffect, useState } from "react"

const BudgetControl = ({budget, spents}) => {
    
    const [calculations, setCalculations ] = useState ({
        available: 0,
        spent: 0,
    })

    useEffect(()=> {
        const totalSpent = spents.reduce( (total, spent) => spent.quantity + total, 0)
        const totalAvailable = budget - totalSpent;
        setCalculations({available: totalAvailable, spent: totalSpent })
    }, [spents])

    const format = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className="container-budget container shadow two-columns">
            <div>
                <p>Grafica aquí</p>
            </div>
            <div className="content-budget">
                <p>
                    <span>Budget:</span> {format(budget)}
                </p>
                <p>
                    <span>Available:</span> {format(calculations.available)}
                </p>
                <p>
                    <span>Spent:</span> {format(calculations.spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl