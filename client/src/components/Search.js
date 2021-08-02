import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <form onSubmit={handleOnSubmit(search)}>
            <input
                type="text"
                value={search}
                onChange={e => { setSearch(e.target.value) }}
            />
        </form>
    )
}


export default Search;