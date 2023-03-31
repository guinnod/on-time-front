import styles from './styles/_header.module.scss'
import { OtherUsers } from './OtherUsers'
import { CircleButton } from "./CircleButton"
import { InviteButton } from './InviteButton'
import { Logo } from "./Logo"
import { SearchInput } from "./SearchInput"
import { UserPhoto } from "./UserPhoto"
import menuIcon from '@icons/menu.svg'
import homeIcon from '@icons/home.svg'
import addIcon from '@icons/add.svg'
import notifyIcon from '@icons/notify.svg'
import colors from '@styles/colors.json'

const headerContent = <div className={styles.anchor} >
    <div>
        <CircleButton svg={menuIcon} color={colors.gray_mid} />
        <CircleButton svg={homeIcon} color={colors.gray_mid} />
        <CircleButton svg={addIcon} color={colors.main} />
    </div>
        <Logo />
    <div>
        <SearchInput />
        <CircleButton svg={notifyIcon} color={colors.gray_mid} />
        <UserPhoto />
    </div>
</div>

export const Header = () => {
    return (headerContent)
}
export const HeaderExtended = () => {
    return (
        <section>
            {headerContent}
            <div className={styles.anchor}>
                <div>
                    <div className={styles.text}>
                        Brackets
                    </div>
                    <div className={styles.line}></div>
                </div>

                <div>
                    <OtherUsers users={[]}/>
                    <InviteButton />
                </div>
            </div>
        </section>
    )
} 