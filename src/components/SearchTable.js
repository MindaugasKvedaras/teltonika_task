import React, { useState } from 'react';

const Table = ({ data, query }) => {
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue  + 5);
  }

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 5);
  }

    return (
     <>
     <div className='table'>
        <table className='app_userlist-table'>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Developer category</th>
            <th>Experience level</th>
            <th>Framework</th>
            <th>E-mail</th>
          </tr>
          {data.slice(0, visible).map((item) => (
            <tr key={item.id}>
              <td>{item.fName}</td>
              <td>{item.lName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.category}</td>
              <td>{item.level}</td>
              <td>{item.framework}</td>
              <td >{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
     {data.length < 1 ? (
       <p className='app_no-search-results'>No search results by "<span>{query}</span>"</p>
       ) : visible <= 9 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItems}>Show More</button>
       </div>
     ) : visible >= 10 & visible < data.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItems}>Show More</button>
          <button onClick={showLessItems}>Show Less</button>
      </div>
     ) : visible === data.length || visible > data.lengthc? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItems}>Show Less</button>
      </div>
     ) : (
       null
     )} 
     </>  
    );
  };
  
  export default Table;