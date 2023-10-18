import React from 'react'
import Spent from './Spent'

const ListSpent = ({spents, setSpentEdit,deleteSpent}) => {
    return (
        <div className="list-spent container">
            <h2>{spents.length ? 'Gastos' : 'Ho hay gastos'}</h2>
            {spents.map (spent => (
                <Spent
                    key ={spent.id}
                    spent={spent}
                    setSpentEdit={setSpentEdit}
                    deleteSpent={deleteSpent}
                />
            ))}
        </div>
    )
}

export default ListSpent