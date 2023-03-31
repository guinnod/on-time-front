import { CommentInput } from '../components/TaskEdit/CommentInput'
import { TaskComment } from '../components/TaskView/TaskComment'
import { TaskData } from '../components/TaskView/TaskData'
import { TaskDescription } from '../components/TaskView/TaskDescription'
import { TaskHeader } from '../components/TaskView/TaskHeader'
import { TaskName } from '../components/TaskView/TaskName'
import styles from './styles/_task-view.module.scss'

export const TaskView = () => {
    const comments = [1];
    return (
        <div className={styles.anchor}>
            <TaskHeader />
            <section>
                <TaskName />
                <TaskData />
                <TaskDescription />
                <div>
                    <h4>Comments (1)</h4>
                    {comments.map((e, key) => {
                        return (<TaskComment key={key} />)
                    })}
                </div>
                <CommentInput />
            </section>
        </div>
    )
}