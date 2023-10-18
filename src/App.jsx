import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { generateID } from './helpers'; 
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListSpent from './components/ListSpent';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spents, setSpents] = useState([])
  const [spentEdit, setSpentEdit] = useState({})

  useEffect(() => {
      if(Object.keys(spentEdit).length>0){
        setModal(true)
        setTimeout(() => {
          setAnimateModal(true);
        }, 500)
      }
  }, [spentEdit])

  const handleNewSpent = () => {
    setModal(true)
    setSpentEdit({})
    setTimeout(() => {
        setAnimateModal(true);
    }, 500)
  }

  const keepSpent = spent => {
    if (spent.id){
      const editSpent = spents.map(edit => edit.id === spent.id ? spent : edit)
      setSpents(editSpent)
      setSpentEdit({})
    } else {
      spent.id = generateID();
      spent.date = Date.now();
      setSpents([...spents, spent,])
    }
  
  }

  const deleteSpent = id => {
    const updatedSpents = spents.filter(spent => spent.id !== id);
    setSpents(updatedSpents)
  }

  return (
    <div className= {modal ? 'pin' : ''} >
      <Header 
        spents = {spents}
        budget = {budget}
        setBudget = {setBudget}
        isValid = {isValid}
        setIsValid = {setIsValid}
      />
      {isValid && (
        <>
          <main>
            <ListSpent 
              spents = {spents}
              setSpentEdit = {setSpentEdit}
              deleteSpent = {deleteSpent}
            />
          </main>
          <div className="new-spent">
            <img
              src={IconoNuevoGasto}
              alt="Icon New Spent"
              onClick={handleNewSpent}
            />
          </div>
        </>
      )}

      {modal && <Modal 
                  setModal={setModal} 
                  animateModal={animateModal} 
                  setAnimateModal={setAnimateModal}
                  keepSpent= {keepSpent}
                  spentEdit = {spentEdit}
                  setSpentEdit = {setSpentEdit}
                />}
    </div>
  )
}

export default App
