import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { generateID } from './helpers'; 
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spents, setSpents] = useState([])
  
  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
        setAnimateModal(true);
    }, 500)
  }

  const keepSpent = spent => {
    spent.id = generateID();
    setSpents([...spents, spent])
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

      {modal && <Modal 
                  setModal={setModal} 
                  animateModal={animateModal} 
                  setAnimateModal={setAnimateModal}
                  keepSpent= {keepSpent}
                />}
    </div>
  )
}

export default App
