import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  
  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
        setAnimateModal(true);
    }, 500)
  }

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
            onClick={handleNewSpent}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal} />}
    </div>
  )
}

export default App
