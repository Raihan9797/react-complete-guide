import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // isValid state is used to determine if the input is valid or not
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    // console.log(event.target.value);
    // check input length is more than 0, set isvalid to true
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log("entered: " + enteredValue);

    if (enteredValue.trim() === '') {
      // prevent input from being empty
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // change label style as red if input is invalid
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid? 'black' : 'red'}}  >Course Goal</label>
        <input type="text" style={{ borderColor: isValid? 'black' : 'red', background: isValid? 'transparent': 'salmon'}}  onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
