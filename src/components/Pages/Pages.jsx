import styles from "./Pages.module.css"
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg"
import { ReactComponent as CvBuilderIcon } from "../../assets/icons/cvBuilder.svg"
import { ReactComponent as JobSearchIcon } from "../../assets/icons/jobSearch.svg"
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg"
import {useNavigate} from "react-router-dom";

const pages = {
    dasboard: 'Dashboard',
    cvBuilder: 'CV Builder',
    jobSearch: 'Job Search',
    settings: 'Settings'
}
export const Pages = () => {
    const navigate = useNavigate()
    const redirectToDashboard = ()=>{
        navigate('/Dashboard')
    }

    return (
        <div className={styles.container}>
            <div className={styles.pageBlock} onClick={redirectToDashboard}>
                <DashboardIcon/>
                <p>{pages.dasboard}</p>
            </div>
            <div className={styles.pageBlock}>
                <CvBuilderIcon/>
                <p>{pages.cvBuilder}</p>
            </div>
            <div className={styles.pageBlock}>
                <JobSearchIcon/>
                <p>{pages.jobSearch}</p>
            </div>
            <div className={styles.pageBlock}>
                <SettingsIcon/>
                <p>{pages.settings}</p>
            </div>
        </div>
    )
}