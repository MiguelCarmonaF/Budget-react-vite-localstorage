import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({budget, setBudget, isValid, setIsValid}) => {
    return (
        <header>
            <h1>
                Expense control
            </h1>
            {isValid ? (
                <BudgetControl 
                    budget = {budget}
                />
                ) : (
                <NewBudget 
                    budget = {budget}
                    setBudget = {setBudget}
                    setIsValid = {setIsValid}
                />
            )}
           
        </header>
    )
}

export default Header 