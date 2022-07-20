const Table = ({ data }) => {
    return (
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
          {data.map((item) => (
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
    );
  };
  
  export default Table;