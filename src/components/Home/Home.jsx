import { useState } from "react"
import Modal from "../Modal/Modal"

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <h1>User Details Modal</h1>
            <button type="button" onClick={handleOpen}>Open Form</button>
            <Modal isOpen={isModalOpen} handleClose={handleClose}>
                <h1>Modal</h1>
            </Modal>
        </div>
    )
}

export default Home