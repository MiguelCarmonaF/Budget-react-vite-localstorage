import React from 'react'
import Spent from './Spent'

const ListSpent = ({spents}) => {
    return (
        <div className="list-spent container">
            <h2>{spents.length ? 'Gastos' : 'Ho hay gastos'}</h2>
            {spents.map (spent => (
                <Spent
                    key ={spent.id}
                    spent={spent}
                />
            ))}
        </div>
    )
}

export default ListSpent