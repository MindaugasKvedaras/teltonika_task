import React, { useState } from 'react';
import { users } from './Home';
import SearchTable from './SearchTable';


const SearchDeveloper = () => {
    const [query, setQuery] = useState("");
    const keys = ["fName", "lName", "gender", "age", "category", "framework", "level"];
    const search = (data) => {
      return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().startsWith(query))
      );
    };

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase());
    }
  
  return (
    <div className='app_search-container'>
        <input className='app_search' placeholder="Search..." onChange={handleSearch} />
        <SearchTable data={search(users)} query={query}/>
    </div>
  )
}

export default SearchDeveloper;