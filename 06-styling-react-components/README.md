# Section 6: Styling React components

## 75. Setting Dynamic Styles
1. Currently, all css styles are not scoped ie they are global.
2. Additionally we want to highlight things to be red when input is wrong. 
    - Eg. we dont want users to add empty goals. We cant just prevent that but how do we let the user know? By using a state
3. Dynamicall change inline. 
    - style takes in an object!
    - they are the highest priority if you set it inline
4. We can change the color if input is invalid. To change back to normal, just check that the input length is > 0

## 76. Setting css classes dynamically
1. Add a css object into the css file. Then if invalid, add that className to the component!
2. Use backticks! This will allow you to put expressions in the string!
```js
// in .css
.form-control.invalid input{
  border-color: red;
  background: salmon;
}

.form-control.invalid label{
  color: red;
}

// in component file
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "" : "invalid"}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" >Add Goal</Button>
    </form>
  );

```


## 77. Introducing styled components (skipped)
### This segment was skipped because there are 2 choices. Using this method is not my preference. Will be doing css modules instead.
1. To prevent bad scoping: we can use 2 methods. Styled components is the first one
2. install `npm install --save styled-components`
3. We can now put the styles in the js files.
    - remove selectors
    - for pseudo selctors and dynamic selectors (eg. invalid) use `&`.
4. Then we can change the style dynamically by just adding the style to the className. 
5. We can also pass props to the style and then change the styles by checking the props.


## 78. Styled components and dynamic props (skipped)


## 79. Styled components and media queries. (skipped)

## 80. Using css modules
1. Tbh, styled components is not needed. Its just that in big projects, people might name things the same which might result in wrong styles. If you prefer css files, you can use css modules instead.
2. css modules is a feature that have been configured properly. Lucky for us `create-react-app` already configured.
3. Change css filename:
```
Button.css -> Button.module.css
```

4. in the js file, import it like this and use it like this
```js
import React from 'react';

import styles from './Button.module.css';

// observe the className
const Button = props => {
  console.log(styles.button);
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

    - The `styles` can be named as anything.
    - Its an object that contains the css objects. we can just call the components we are using
    - it can also call other css components using styles['form-control'] to allow for names with `-`

5. Inspecting the element, you can see that `class = "Button_button__1B290"`. basically filename_componentname__uniquehash.
    - css modules changes the classnames to be unique to prevent the same name being called!. This creates scoping!