import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({budget, setBudget, isValid, setIsValid, spents, setSpents}) => {
    return (
        <header>
            <h1>
                Expense control
            </h1>
            {isValid ? (
                <BudgetControl 
                    budget = {budget}
                    spents = {spents}
                    setSpents = {setSpents}
                    setBudget = {setBudget}
                    setIsValid = {setIsValid}
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