import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { users } from './Home';
import SearchTable from './SearchTable';


const SearchDeveloper = () => {
    const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const keys = ["fName", "lName", "gender", "age", "category", "framework", "level"];
    const search = (data) => {
      return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase());
        setSearchParams({query: e.target.value});
    }
  
  return (
    <div className='app_search-container'>
        <input className='app_search' placeholder="Search..." onChange={handleSearch} />
        {<SearchTable data={search(users)}/>}
    </div>
  )
}

export default SearchDeveloper;