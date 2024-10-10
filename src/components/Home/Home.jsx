import Modal from "../Modal/Modal"

const Home = () => {
    return (
        <div>
            <h1>User Details Modal</h1>
            <button type="button">Open Form</button>
            <Modal>
                <h1>Modal</h1>
            </Modal>
        </div>
    )
}

export default Home