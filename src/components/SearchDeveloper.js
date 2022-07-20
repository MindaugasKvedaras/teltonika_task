import React, { useState } from 'react';
import { users } from './Home';
import SearchTable from './SearchTable';


const SearchDeveloper = () => {
    const [query, setQuery] = useState("");
    const keys = ["fName", "lName", "gender", "age", "category", "framework", "level"];
    const search = (data) => {
      return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };
  
  return (
    <div className='app_search-container'>
        <input className='app_search' placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        {<SearchTable data={search(users)}/>}
    </div>
  )
}

export default SearchDeveloper;