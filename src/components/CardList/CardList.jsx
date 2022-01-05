import styles from "./CardList.module.css"
import {CardInfo} from "../CardInfo/CardInfo";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg"

const cardInfoArr = [
    {id: 1 ,title: 'title1', isDefault: true, lastModified: {month: 'feb', day: 10, year: 2020}, extension: 'source'},
    {id: 2 ,title: 'title2', isDefault: false, lastModified: {month: 'feb', day: 12, year: 2020}, extension: '.pdf'},
    {id: 3 ,title: 'title3', isDefault: false, lastModified: {month: 'feb', day: 11, year: 2020}, extension: 'html'},
    {id: 4 ,title: 'title4', isDefault: false, lastModified: {month: 'feb', day: 10, year: 2020}, extension: 'html'},
    {id: 5 ,title: 'title4', isDefault: false, lastModified: {month: 'feb', day: 10, year: 2020}, extension: 'html'},
    {id: 6 ,title: 'title4', isDefault: false, lastModified: {month: 'feb', day: 10, year: 2020}, extension: 'html'},
    {id: 7 ,title: 'title4', isDefault: false, lastModified: {month: 'feb', day: 10, year: 2020}, extension: 'html'},
]

export const CardList = () => {


    return (
        <div className={styles.container}>
            <div className={styles.firstCard}>
                <PlusIcon/>
            </div>
            {cardInfoArr.map((card) => (
                    <CardInfo {...card} key={card.id}/>

                )
            )}
        </div>
    )
}