import styles from './Modal.module.css';

const Modal = ({ isOpen, handleClose, children }) => {

  if (!isOpen)
    return <></>;

  return (
    <div className={`modal ${styles.Modal}`} onClick={handleClose}>
      <div className={`modal-content ${styles.ModalContent}`} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div >
  )
}

export default Modal