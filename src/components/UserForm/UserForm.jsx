import styles from './UserForm.module.css';

const UserForm = () => {
    return (
        <form className={styles.container}>
            <h2>Fill Details</h2>
            <strong>Username:</strong>
            <input type='text' id='username' className={styles.input} />
            <strong>Email Address:</strong>
            <input type='email' id='email' className={styles.input} />
            <strong>Phone Number:</strong>
            <input type='number' id='phone' className={styles.input} />
            <strong>Date of Birth:</strong>
            <input type='date' id='dob' className={styles.input} />
            <button type='submit' className={styles.button}>Submit</button>
        </form>
    )
}

export default UserForm