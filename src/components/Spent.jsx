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

const Spent = ({spent}) => {
    return (
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
    )
}

export default Spent