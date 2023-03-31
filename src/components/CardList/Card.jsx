import styles from './styles/_card.module.scss'
import { OtherUsers } from '../Header/OtherUsers'
import { CardOption } from './CardOption'
import { CardProgress } from './CardProgress'
import checkIcon from '@icons/fi_check-circle.svg'
import messageIcon from '@icons/message.svg'
import paperclipIcon from '@icons/paperclip.svg'

export const Card = ({ color, name, value, users, comments, steps, paperclip }) => {
    const commentsSize = comments ? comments.length : 0;

    return (
        <div className={styles.anchor}>
            {name}
            <CardProgress value={value} color={color} />
            <div className={styles.options}>
                <CardOption data={commentsSize} svg={messageIcon} />
                {steps ? <CardOption data={`${steps.current}/${steps.max}`} svg={checkIcon} /> : <></>}
                {paperclip ? <CardOption data={paperclip} svg={paperclipIcon} /> : <></>}
            </div>
            {users ? <OtherUsers users={users} /> : <></>}
        </div>
    )
}