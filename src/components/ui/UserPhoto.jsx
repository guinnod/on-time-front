import styles from './styles/_user-photo.module.scss'

export const UserPhoto = ({ src, width, onClick, id }) => {
    return (
        <img id={id} loading="lazy" onClick={onClick} className={styles.anchor} style={width ? { minWidth: width, minHeight: width } : {}} src={src} alt="user" />
    )
}