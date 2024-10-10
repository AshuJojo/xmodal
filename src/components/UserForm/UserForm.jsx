import { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ handleModalClose }) => {
    const [formInput, setFormInput] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        const newFormInput = { ...formInput };

        newFormInput[id] = value;

        setFormInput(newFormInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formInput.phone.trim().length !== 10) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return;
        }

        const todayDate = Date.now();
        const dobObj = new Date(formInput.dob);

        if (todayDate < dobObj) {
            alert('Invalid date of birth. Date of birth cannot be in the future.')
            return;
        }

        setFormInput({ username: '', email: '', phone: '', dob: '' })
        handleModalClose();
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h2>Fill Details</h2>
            <strong>Username:</strong>
            <input type='text' id='username' value={formInput.username} onChange={handleInputChange} className={styles.input} required />
            <strong>Email Address:</strong>
            <input type='email' id='email' value={formInput.email} onChange={handleInputChange} className={styles.input} required />
            <strong>Phone Number:</strong>
            <input type='number' id='phone' value={formInput.phone} onChange={handleInputChange} className={styles.input} required />
            <strong>Date of Birth:</strong>
            <input type='date' id='dob' value={formInput.dob} onChange={handleInputChange} className={styles.input} required />
            <button type='submit' className={`submit-button ${styles.button}`}>Submit</button>
        </form>
    )
}

export default UserForm