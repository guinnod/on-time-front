import styles from '../../../styles/components/Login/ui/_login-password.module.scss'
export const LoginPassword = ({ placeholder }) => {
    return (
        <div className={styles.anchor}>
            <label className={styles.label} htmlFor='password'>{placeholder}</label>
            <input className={styles.input} type="password" name="password" id="password" placeholder={placeholder} />
        </div>
    )
} 