import styles from "./CvPage.module.css"
import {CardList} from "../CardList/CardList";
import {FiltersList} from "../Filters/FiltersList";


const profile = {name: 'Julia', surname: 'Senko'}

export const CvPage = () => {

    return (
        <div className={styles.container}>
            <div >
                <h1>CV Builder</h1>
                <span>Welcome to TechCore,{profile.name} {profile.surname}</span>
            </div>
            <FiltersList/>
            <CardList/>
        </div>
    )
}
