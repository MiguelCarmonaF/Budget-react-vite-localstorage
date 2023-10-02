const NewBudget = () => {
    return (
        <div className="container-budget container shadow">
           <form className="form1">
                <div className="field">
                    <label>Define budget</label>
                    <input 
                        className= "new-budget"
                        type= "text"
                        placeholder="Add your budget"
                    />
                </div>
                <input type="submit" value="Add" />
           </form>
        </div>
    )
}

export default NewBudget 