import styles from "./CvMenu.module.css"
import {ReactComponent as Logo} from "../../assets/icons/Logo.svg"
import {Pages} from "../Pages/Pages";
import {UserProfile} from "../UserProfile/UserProfile";
import {Notifications} from "../NotificationsWithIcon/Notifications";


export const CvMenu = () => {


    return (
        <div className={styles.container}>
            <Logo  className={styles.logo}/>
            <Pages/>
            <div className={styles.notificationWrapper}>
                <Notifications/>
                <UserProfile/>
            </div>
        </div>
    )
}