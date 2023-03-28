import styles from './styles/_invite-button.module.scss'
import inviteIcon from '../../assets/icons/user-circle-add.svg'
export const InviteButton = () => {
    return (
        <div className={styles.anchor}>
            <img src={inviteIcon} alt="invite icon" />
            <div className={styles.text}>
                Invite
            </div>
        </div>
    )
}