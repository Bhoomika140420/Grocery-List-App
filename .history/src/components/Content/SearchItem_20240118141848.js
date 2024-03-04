const SearchItem = () => {
    return(
        <form className='searchForm' onSubmit={(e) => e.preventDefault}>
            <label htmlFor="search">Search</label>
            <input type="text" />
        </form>
    )
}

export default SearchItem;