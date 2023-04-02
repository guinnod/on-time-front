import styles from './styles/_task-comment.module.scss'
import messagesIcon from '@icons/messages.svg'
import optionsIcon from '@icons/options.svg'
export const TaskComment = ({comment}) => {

    return (
        <div className={styles.anchor}>
            <div className={styles.icon}>
                <img src={messagesIcon} alt="description" />
            </div>
            <div className={styles.header}>
                <p>Abzal, Back end</p>
                <div>
                    <span>Dec, 14, 2022</span>
                    <img src={optionsIcon} alt="options" />
                </div>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt qui eligendi, accusamus nemo error at adipisci molestiae quasi temporibus. A corporis eos dolores, magnam maiores nobis fuga sequi doloribus minima.
        </div>
    )
}