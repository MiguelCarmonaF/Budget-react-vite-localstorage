const BudgetControl = ({budget}) => {
    
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
            <div className="container-budget">
                <p>
                    <span>Budget:</span> {format(budget)}
                </p>
                <p>
                    <span>Available:</span> {format(0)}
                </p>
                <p>
                    <span>Spent:</span> {format(0)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl