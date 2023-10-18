import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions}from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formateDate} from "../helpers"
import iconoAhorro from "../img/icono_ahorro.svg"
import iconoCasa from "../img/icono_casa.svg"
import iconoComida from "../img/icono_comida.svg"
import iconoGastos from "../img/icono_gastos.svg"
import iconoOcio from "../img/icono_ocio.svg"
import iconoSalud from "../img/icono_salud.svg"
import iconoSupscripciones from "../img/icono_suscripciones.svg"

const icons = {
    saving : iconoAhorro,
    food: iconoComida,
    house: iconoCasa,
    hobbies: iconoOcio,
    health: iconoSalud,
    suscriptions: iconoSupscripciones,
    spents: iconoGastos,
}

const Spent = ({spent, setSpentEdit,deleteSpent}) => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={()=>setSpentEdit(spent)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=> deleteSpent(spent.id)} destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="spent shadow">
                        <div className="content-spent">
                            <img
                                src={icons[spent.category]}
                            />
                            <div className="description-spent">
                                <p className="category">
                                    {spent.category}
                                </p>
                                <p className="name-spent">
                                    {spent.name}
                                </p>
                                <p className="spent-date">
                                    Add on: {formateDate(spent.date)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="quantity-spent">${spent.quantity}</p>
                        </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Spent