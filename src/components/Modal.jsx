import { useState, useEffect } from 'react'
import closeBtn from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({setModal, animateModal, setAnimateModal, keepSpent, spentEdit, setSpentEdit}) => {
    
    const [form, setForm] = useState({
        name: "",
        quantity: 0,
        category: "",
        id: "",
        date: "",
    })

    useEffect(() => {
        if(Object.keys(spentEdit).length>0){
            setForm({...spentEdit})
          }
    },[]);

    const [message, setMessage] = useState("")
    
    const closeModal = () => {
   
        setAnimateModal(false)
        setSpentEdit({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault(form.includes);
        
        if([form.name, form.quantity, form.category].includes('')){
            setMessage("Todos los campos son obligatorios");
        } else {
            keepSpent({...form})
            setAnimateModal(false)
            setTimeout(() => {
                setModal(false)
            }, 500);
        }
    }

    return (
        <div className="modal">
            <div className="close-modal">
                <img
                    src={closeBtn}
                    alt="Close Modal Button"
                    onClick={closeModal}
                />
            </div>
            <form 
                className={`form1 ${animateModal ? "animate" : "close"}`}
                onSubmit= {handleSubmit}
            >
                <legend>{spentEdit.name ? "Edit Spent" : "New Spent"}</legend>
                {message && <Message type="error">{message}</Message>}
                <div className="field">
                    <label htmlFor='name'>Spent Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder='Add name'
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                    />
                </div>
                <div className="field">
                    <label htmlFor='Quantity'>Quantity (Price)</label>
                    <input
                        id="Quantity"
                        type="number"
                        placeholder='Add quantity'
                        value= {form.quantity}
                        onChange={e => setForm({...form, quantity: Number(e.target.value)})}
                    />
                </div>
                <div className="field">
                    <label htmlFor='category'>Category</label>
                    <select
                        id="category"
                        value = {form.category}
                        onChange={e => setForm({...form, category: e.target.value})}
                    > 
                        <option value="">-- Select --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="hobbies">Hobbies</option>
                        <option value="health">Health</option>
                        <option value="suscriptions">Suscriptions</option>
                        <option value="spents">Spents</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value={spentEdit.name ? "Edit Spent" : "Add Spent"}
                />
            </form>
        </div>
    )
}

export default Modal