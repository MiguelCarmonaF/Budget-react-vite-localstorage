import closeBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {
    
    const closeModal = () => {
   
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
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
            <form className={`form1 ${animateModal ? "animate" : "close"}`}>
                <legend>NUEVO GASTO</legend>
            </form>
        </div>
    )
}

export default Modal