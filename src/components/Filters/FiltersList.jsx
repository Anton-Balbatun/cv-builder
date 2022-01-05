import styles from "./Filters.module.css"
import {Filter} from "../Filter/Filter";

const filtersArr = [
    {id:1, name: 'Recent', options: [{id: 1, title:'option1'}, {id: 2, title:'option2'},{id: 3, title:'option3'}]},
    {id:2, name: 'All formats', options: [{id: 1, title:'option1'}, {id: 2, title:'option2'},{id: 3, title:'option3'}]},
]

export const FiltersList = () => {

    return (
        <div className={styles.container}>
            {filtersArr.map((props)=>{
               return (
                   <Filter key={props.id} {...props} />
               )
            })}
        </div>
    )
}
