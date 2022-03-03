import Card from '../UI/Card';
import Button from '../UI/Button';

// import classes from './AddUser.module.css';
import './AddUser.css';

function AddUser(props) {
    function addUserHandler(event) {
        event.preventDefault();
    };

    return (
        //<Card className = {classes.input}>
        <Card className = "addUser">
            <form onSubmit = {addUserHandler} >
                <label htmlFor = "username">Username</label>
                <input id="username" type = "text"></input>

                <label htmlFor = "age">Age Years)</label>
                <input id="username" type = "number"></input>

                <Button type="submit">Add User</Button>
            </form>
        </Card>

    )
}

export default AddUser;