import { useState } from "react";
import Message from './Message';
const NewBudget = ({budget, setBudget, setIsValid}) => {

const [message, setMessage] = useState("");

const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!budget || budget < 0){
        setMessage("Enter a valid amount")
    } else {
        setMessage("");
        setIsValid(true);
    }
}

    return (
        <div className="container-budget container shadow">
           <form onSubmit={handlePresupuesto} className="form1">
                <div className="field">
                    <label>Define budget</label>
                    <input 
                        className="new-budget"
                        type="number"
                        placeholder="Add your budget"
                        value= {budget}
                        onChange= { e => setBudget(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Add" />
                {message && <Message type="error">{message}</Message> /* Si message es true (tiene algo) 
                muestra este error, message dentro de las tags es para renderizar el contenido*/} 
           </form>
        </div>
    )
}

export default NewBudget 