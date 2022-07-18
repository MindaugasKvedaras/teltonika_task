import React, { useState } from 'react';

export const users = [
{
    id: 1,
    fName: "Juozas",
    lName: "Petkevičius",
    email: "juozas.petkus@gmail.com",
    password: "",
    age: 69,
    gender: "Male",
    category: "Full-stack"
},
{
    id: 2,
    fName: "Ramunė",
    lName: "Banienė",
    email: "ramune.ban@gmail.com",
    password: "",
    age: 49,
    gender: "Female",
    category: "Front-end"  
}];

let nextId = 3;

const Home = () => {
    const [gender, setGender] = useState('Male');
    const [category, setCategory] = useState('Front-end');
    const [formData, setFormData] = useState({id: '', fName: '', lName: '', age: '', category, gender, email: ''});

    const resetRadioSate = () => {
        setGender('');
    }

    const resetCategory = () => {
        setCategory('');
    }

    const handleOnInputChange = (e) => {
        const { value, name } = e.target;
        setGender(e.target.value);
        setCategory(e.target.value);
    
        // merge previous formData with the new value from input
        setFormData({
          ...formData,
          [name]: value,
        })
      }
    
    const onSubmit = (e) => {

        e.preventDefault();
        const { fName, lName, age, gender, category, email } = formData;
        users.push({id: nextId, fName, lName, age, gender, category, email });
        console.log(users);
        nextId++;
        setFormData({fName: '', lName: '', age: '', email: ''});
        resetRadioSate();
        resetCategory();
        e.target.reset();
    }

    return (
        <div className="app_developer-form">
        <h1>New developer</h1>
            <form onSubmit={onSubmit} className="app_user-form">
                    <input type="text" id="fname" name="fName" placeholder="First Name" required minlength="3" maxlength="15" onChange={handleOnInputChange}/>
                    <input type="text" id="lname" name="lName" placeholder="Last Name" required minlength="3" maxlength="15" onChange={handleOnInputChange}/>
                    <input type="email" id="email" name="email" placeholder="E-mail" required onChange={handleOnInputChange}/>
                    <input type="password" id="password" name="password" placeholder="Password" required onChange={handleOnInputChange}/>
                    <input type="number" id="age" name="age" min="16" max="80" step="1" placeholder="Age" required onChange={handleOnInputChange}/>
                <p>Gender:</p>
                <label>
                    <input type="radio" id="malegender" name="gender" value="Male" checked={gender === 'Male'} onChange={handleOnInputChange} />
                    Male
                    <input type="radio" id="femalegender" name="gender" value="Female" checked={gender === 'Female'} onChange={handleOnInputChange} />
                    Female
                </label>
                <label>Developer category:
                    <select name="category" onChange={handleOnInputChange}>
                        <option id="frontend" value="Front-end">Front-end</option>
                        <option id="backend"  value="Back-end">Back-end</option>
                        <option id="fullstack" value="Full-stack">Full-stack</option>
                    </select>
                </label>
                <input type="submit" value="Add developer" />
            </form>
        </div>
  );
}

export default Home;