import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { users } from '../Home';

const FrontEndList = () => {

  const [visibleVueTable, setVisibleVueTable] = useState(3);
  const [visibleReactTable, setVisibleReactTable] = useState(3);

  const showMoreItemsVueTable = () => {
    setVisibleVueTable((prevValue) => prevValue  + 3);
  }

  const showLessItemsVueTable = () => {
    setVisibleVueTable((prevValue) => prevValue - 3);
  }

  const showMoreItemsReactTable = () => {
    setVisibleReactTable((prevValue) => prevValue  + 3);
  }

  const showLessItemsReactTable = () => {
    setVisibleReactTable((prevValue) => prevValue - 3);
  }


  const SeniorVueBackenders = users.filter(user => {
    return user.category === "Back-end" && user.level === "Senior" && user.framework === "Vue";
  })
  
  const SeniorReactBackenders = users.filter(user => {
    return user.category === "Back-end" && user.level === "Senior" && user.framework === "React";
  })


  return (
    <div className='app_userlist-box'>
      <h1>Senior-Vue.js</h1>
      {SeniorVueBackenders.length > 0 ? ( 
      <> 
      <div className="table">
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
              {SeniorVueBackenders.map((user) => (
              <tr key={user.id} id="user-data">
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.category}</td>
                <td>{user.level}</td>
                <td>{user.framework}</td>
                <td>{user.email}</td>
              </tr>
              ))}
          </tbody>
        </table>
        </div>
    {visibleVueTable <= 3 & SeniorVueBackenders.length > 3 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsVueTable}>Show More</button>
       </div>
     ) : visibleVueTable >= 6 & visibleVueTable < SeniorVueBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsVueTable}>Show More</button>
          <button onClick={showLessItemsVueTable}>Show Less</button>
      </div>
     ) : visibleVueTable === SeniorVueBackenders.length || visibleVueTable > SeniorVueBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItemsVueTable}>Show Less</button>
      </div>
     ) : (
       null
     )} 
        </>
        ) : (
          <p className='app_no-table'>No Senior Vue.js Back-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
        <h1>Senior-React.js</h1>
        {SeniorReactBackenders.length > 0 ? (
        <>
        <div className="table">
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
              {SeniorReactBackenders.slice(0,visibleReactTable).map((user) => (
              <tr key={user.id} id="user-data">
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.category}</td>
                <td>{user.level}</td>
                <td>{user.framework}</td>
                <td>{user.email}</td>
              </tr>
              ))}
          </tbody>
        </table>
        </div>
    {visibleReactTable <= 3 & SeniorReactBackenders.length > 3 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsReactTable}>Show More</button>
       </div>
     ) : visibleReactTable >= 6 & visibleReactTable < SeniorReactBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsReactTable}>Show More</button>
          <button onClick={showLessItemsReactTable}>Show Less</button>
      </div>
     ) : visibleReactTable === SeniorReactBackenders.length || visibleReactTable > SeniorReactBackenders.length? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItemsReactTable}>Show Less</button>
      </div>
     ) : (
       null
     )} 
        </>
        ) : (
          <>
            <p className='app_no-table'>No Senior React.js Back-enders,<span> </span>
              <Link to="/">add</Link> new developer
            </p>
          </>
        )}
      </div>
  )
}

export default FrontEndList;