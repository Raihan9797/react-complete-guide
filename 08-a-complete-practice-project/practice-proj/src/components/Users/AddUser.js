import {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

// import classes from './AddUser.module.css';
import './AddUser.css';

function AddUser(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);


    function addUserHandler(event) {
        event.preventDefault();
        console.log(username, age);
    };

    function usernameChangeHandler(event) {
        // console.log(event.target.value);
        setUsername(event.target.value);
    }

    function ageChangeHandler(event) {
        // console.log(event.target.value);
        setAge(event.target.value);
    }

    return (
        //<Card className = {classes.input}>
        <Card className = "addUser">
            <form onSubmit = {addUserHandler} >
                <label htmlFor = "username">Username</label>
                <input id="username" type = "text" onChange = {usernameChangeHandler}></input>

                <label htmlFor = "age">Age Years)</label>
                <input id="age" type = "number" min="0" step ="1" onChange={ageChangeHandler}></input>

                <Button type="submit">Add User</Button>
            </form>
        </Card>

    )
}

export default AddUser;