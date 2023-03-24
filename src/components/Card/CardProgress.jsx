import styles from './styles/_card-progress.module.scss'

export const CardProgress = ({ value, color }) => {
    return (
        <progress  className={styles.anchor} value={value} max={100}></progress>
    )
}