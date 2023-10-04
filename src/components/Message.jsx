
const Message = ({children, type}) => {  //RENDERIZAMOS EL CONTENIDO QUE PASAMOS CON EL PROP CHILDREN, EL CONTENIDO DENTRO DE LAS ETIQUETAS 
    return (
        <div className={`alert ${type}`}>{`${children}`}</div>
    )
}

export default Message