import styles from "./FilterOption.module.css"



export const FilterOption = ({option}) => {

    return (
        <a className={styles.container}>
            {option}
        </a>
    )
}
