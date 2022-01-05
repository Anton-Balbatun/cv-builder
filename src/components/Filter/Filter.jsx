import styles from "./Filter.module.css"
import {FilterOption} from "../FilterOption/FilterOption";
import { ReactComponent as DropIcon } from "../../assets/icons/dropdown.svg"

export const Filter = ({name, options}) => {
    return (
        <div className={styles.container}>

            <div className={styles.filterContent}>
                <p className={styles.title}>{name}</p>
                <DropIcon className={styles.icon}/>
            </div>
            <div className={styles.dropdownContent}>
                {options.map((option)=>{
                    return <FilterOption option={option.title} key={option.id}/>
                })}
            </div>

        </div>
    )
}
