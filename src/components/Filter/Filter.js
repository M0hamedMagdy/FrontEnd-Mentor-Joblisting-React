import './Filter.module.css'

function Filter({filterTags}) {
    return ( 
        <input value={filterTags} type="search" name="search" id="search" />
    )
}

export default Filter;