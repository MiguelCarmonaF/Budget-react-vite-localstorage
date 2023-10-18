import { useEffect, useState } from "react"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const BudgetControl = ({budget, spents}) => {
    
    const [calculations, setCalculations ] = useState ({
        available: 0,
        spent: 0,
    })
    const [percentage, setPercentage] = useState(0)

    useEffect(()=> {
        const totalSpent = spents.reduce( (total, spent) => spent.quantity + total, 0)
        const totalAvailable = budget - totalSpent;
        setCalculations({available: totalAvailable, spent: totalSpent })
        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2); 
        setTimeout(() => {
            setPercentage(newPercentage);
        },1000);
    }, [spents])

    const format = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className="container-budget container shadow two-columns">
            <div className='circular-progressbar'>
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles ({
                      pathColor: '#3B82F6',
                      trailColor: '#F5F5F5', 
                      textColor: '#3B82F6',
                    })}
                    text={`${percentage}% Used`}
                />
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