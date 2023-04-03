import { Content } from './Content'
import styles from './styles/_menu.module.scss'
import svg1 from '@icons/Group_4.svg'
import svg2 from '@icons/clipboard-tick.svg'
import svg3 from '@icons/Group_3.svg'
import { useState } from 'react'
import { List } from '@components/ui/List'
export const Menu = () => {

    const contents = [{ svg: svg1, text: 'Boards' },
    { svg: svg2, text: 'My tasks' }]
    const workspaces = [{ svg: svg3, text: 'soft enj' }, { svg: svg3, text: 'soft enj' }]
    const [sel, setSel] = useState(0);
    return (
        <List gap={30}>
            <div>
                {contents.map((e, key) => {
                    let s = key === sel ? ' ' + styles.selected : ' '
                    return (
                        <Content onClick={() => { setSel(key) }} selected={s} svg={e.svg} text={e.text} key={key} />
                    )
                })}
            </div>
            <div>
                <div className={styles.text}>Workspaces</div>
                <div>
                    {workspaces.map((e, key) => {
                        let s = key + 2 === sel ? ' ' + styles.selected : ' '
                        return (
                            <Content onClick={() => { setSel(key + 2) }} svg={e.svg} text={e.text} key={key} selected={s} />
                        )
                    })}
                </div>
            </div>
            <div className={styles.add}>
                + Add new workspace
            </div>
        </List>
    )
} 