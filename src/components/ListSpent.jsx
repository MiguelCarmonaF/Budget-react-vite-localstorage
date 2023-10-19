import React from 'react'
import Spent from './Spent'

const ListSpent = ({spents, setSpentEdit,deleteSpent, spentsFiltered, filter}) => {
    return (
        <div className="list-spent container">
            
            
            { filter ? 
                (
                    <>
                        <h2>{spentsFiltered.length ? 'Gastos' : 'Ho hay gastos'}</h2>
                        {spentsFiltered.map (spent => (
                            <Spent
                                key ={spent.id}
                                spent={spent}
                                setSpentEdit={setSpentEdit}
                                deleteSpent={deleteSpent}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{spents.length ? 'Gastos' : 'Ho hay gastos'}</h2>
                        {spents.map (spent => (
                            <Spent
                                key ={spent.id}
                                spent={spent}
                                setSpentEdit={setSpentEdit}
                                deleteSpent={deleteSpent}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListSpent