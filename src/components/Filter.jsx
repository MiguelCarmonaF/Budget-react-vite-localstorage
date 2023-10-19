import { useState, useEffect} from 'react'

const Filters = ({filter, setFilter}) => {
    return (
        <div className="filters shadow container">
            <form>
                <div className="field">
                    <label>Filter</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
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
            </form>
        </div>
    )
}

export default Filters