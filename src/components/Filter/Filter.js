import styles from "./Filter.module.css";

function FilterTag({ filterTags, removeTag }) {
  return (
    <div>
      {filterTags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
          <button onClick={removeTag} value={tag}>
            X
          </button>
        </span>
      ))}
    </div>
  );
}
function Filter({ filterTags, removeTag, clearTags }) {
  return (
    <div className={styles.filterTags}>
      <FilterTag removeTag={removeTag} filterTags={filterTags} />
      <button onClick={clearTags} className={styles.clear}>
        Clear
      </button>
    </div>
  );
}

export default Filter;
