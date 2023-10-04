import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);
  return (
    <div>
      <Header 
        budget = {budget}
        setBudget = {setBudget}
        isValid = {isValid}
        setIsValid = {setIsValid}
      />
      {isValid && (
        <div className="new-spent">
          <img
            src={IconoNuevoGasto}
            alt="Icon New Spent"
          />
        </div>
      )}
    </div>
  )
}

export default App
