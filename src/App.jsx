import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { generateID } from './helpers'; 
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListSpent from './components/ListSpent';
import Filters from './components/Filter'

function App() {
  const [budget, setBudget] = useState(localStorage.getItem('budget') ?? 0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spents, setSpents] = useState(localStorage.getItem('spents') ? JSON.parse(localStorage.getItem('spents')) : [])
  const [spentEdit, setSpentEdit] = useState({})
  const [filter, setFilter] = useState('')
  const [spentsFiltered, setSpentsFiltered] = useState([])

  useEffect(() => {
      if(Object.keys(spentEdit).length>0){
        setModal(true)
        setTimeout(() => {
          setAnimateModal(true);
        }, 500)
      }
  }, [spentEdit])

  useEffect(() => {
      Number(localStorage.setItem('budget', budget)) ?? 0
  }, [budget])

  useEffect(() => {
    localStorage.setItem('spents', JSON.stringify(spents) ?? []);
  },[spents])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0 ;
    if (budgetLS>0){
      setIsValid(true)
    }

  },[])

  useEffect(() => {
    if (filter){
        const spentFilter = spents.filter (spent => spent.category===filter)
        setSpentsFiltered(spentFilter)
      }
  }, [filter])

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
        setSpents = {setSpents}
      />
      {isValid && (
        <>
          <main>
            <Filters
              filter = {filter}
              setFilter = {setFilter}
            />
            <ListSpent 
              spents = {spents}
              setSpentEdit = {setSpentEdit}
              deleteSpent = {deleteSpent}
              filter={filter}
              spentsFiltered={spentsFiltered}
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
