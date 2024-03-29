import styles from './styles/_checklist.module.scss'
import arrowCircleIcon from '@icons/arrow-circle.svg'
import trashIcon from '@icons/trash.svg'
import { Progress } from '@components/ui/Progress'
import colors from '@styles/colors.json'
import { Box } from '@components/ui/Box'
import calculateProgress from '@utils/calculateProgress'
export const Checklist = ({ subCount, onClick, isItems }) => {
    return (
        <section className={styles.anchor}>
            <Box style={{ width: '100%' }}>
                <h3>Checklist</h3>
                <Box gap={25}>
                    <Box onClick={onClick} className={!isItems ? styles.box : styles.box2}>
                        <img style={{ cursor: 'pointer' }} src={arrowCircleIcon} alt="arrow" />
                        <span style={{minWidth: '130px', textAlign: 'end'}}>{isItems ? 'Hide' : 'Show'} checked items</span>
                    </Box>
                    <img style={{ cursor: 'pointer' }} src={trashIcon} alt="trash" />
                </Box>
            </Box>
            <div className={styles.progress}>
                <Box>
                    {`${calculateProgress(subCount.done, subCount.all)}%`} <Progress background={colors.gray_mid} value={calculateProgress(subCount.done, subCount.all)} size={450} color={colors.azure} />
                </Box>
            </div>
        </section>
    )
}