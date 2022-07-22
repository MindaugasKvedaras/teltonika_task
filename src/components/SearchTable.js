import React, { useState } from 'react';
import { users } from './Home';

const Table = ({ data, query }) => {
  const [visible, setVisible] = useState(5);
  const [isExported, setIsExported] = useState(false);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue  + 5);
    window.scrollBy(0, 450);
  }

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 5);
  }

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType })
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt);
    a.remove();
  }
  
  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(users),
      fileName: 'all-developers.json',
      fileType: 'text/json',
    })

    setIsExported(true);
    setTimeout(() => {
      setIsExported(false);
    }, 2500);

  }

  const exportFilteredToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(data),
      fileName: 'filtered-developers.json',
      fileType: 'text/json',
    })

    setIsExported(true);
    setTimeout(() => {
      setIsExported(false);
    }, 2500);

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
     {!query ? (
        <div className='app_json-btn'>
          {!isExported ? (
            <button type='button' onClick={exportToJson}>
              Export all data to JSON file
            </button>
          ) : (
            <p className="app_export-message">Successfully exported all data!</p>
          )}  
        </div>       
     ) : ( 
      <div className='app_json-btn'>
        {!isExported ? (
          <>
            <button type='button' onClick={exportFilteredToJson}>
              Export filtered data to JSON file
            </button>
            <button type='button' onClick={exportToJson}>
              Export all data to JSON file
            </button>
          </>
          ) : (
            <p className="app_export-message">Successfully exported all data!</p>
        )}  
      </div>  
     )}
     </>  
    );
  };
  
  export default Table;