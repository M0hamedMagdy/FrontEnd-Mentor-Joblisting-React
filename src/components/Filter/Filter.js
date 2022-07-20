import styles from './Filter.module.css';


function FilterTag({filterTags}) {
    return (
        <div>
            {filterTags.map((tag) => <span className={styles.tag}>
                {tag}
                </span>)}
        </div>
        )
}
function Filter({filterTags}) {
    return (
        <div className={styles.filterTags}>
            
        <FilterTag filterTags={filterTags}/>
        <button className={styles.clear}>Clear</button>
        </div>  
    )
}

export default Filter;