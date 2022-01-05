import styles from "./UserProfile.module.css"
import { ReactComponent as UserProfileIcon } from "../../assets/icons/userProfile.svg"


export const UserProfile = () => {

    return (
        <div className={styles.container}>
            <UserProfileIcon/>
        </div>
    )
}