import styles from "./CardInfo.module.css"
import { ReactComponent as TimeIcon } from "../../assets/icons/time.svg"


export const CardInfo = ({title, isDefault, lastModified, extension}) => {

    const modififiedDate = `Last modified:${lastModified.month} ${lastModified.day}, ${lastModified.year}`

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {isDefault && <span className={styles.default}>default</span>}
            <div className={styles.date}>
                <TimeIcon/>
                <p className={styles.dateText}>{modififiedDate}</p>
            </div>
            <button className={styles.button}>{extension}</button>
        </div>
    )
}
