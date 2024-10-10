import styles from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <div className={`modal ${styles.Modal}`} >
      <div className={`modal-content ${styles.ModalContent}`}>
        {children}
      </div>
    </div >
  )
}

export default Modal