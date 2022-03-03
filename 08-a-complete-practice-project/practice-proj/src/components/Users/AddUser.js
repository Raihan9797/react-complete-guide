import './AddUser.css';
import Card from '../UI/Card';

function AddUser(props) {
    function addUserHandler(event) {
        event.preventDefault();
    };

    return (
        <Card className = 'addUser'>
            <form onSubmit = {addUserHandler} >
                <label htmlFor = "username">Username</label>
                <input id="username" type = "text"></input>

                <label htmlFor = "age">Age Years)</label>
                <input id="username" type = "number"></input>

                <button type="submit">Add User</button>
            </form>
        </Card>

    )
}

export default AddUser;