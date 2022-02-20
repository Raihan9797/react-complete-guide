# Section 3: react basics


# 28. Creating a new react project
1. install node, create react app
2. create react app
3. npm start to see the output on localhost
4. Use the downloaded version they provide for simplicity
    - `npm install` so we get the required modules
    - .gitignore to prevent pushing all these folders into github

# 30. Analyzing standard react project
1. React code is just javascript. Sometimes has a special syntax from React but overall the same
2. `index.js` is the first code file being run. Behind the scenes, it has been transformed to show the page you see on localhost.
3. some of the transformations may differ based on the type of browser used. 
4. react just makes it more easier for ppl to code out.
    - eg. `import './index.cc/` would not work in javascript. But using reacts tranform this code into something that is readable for browsers to render!

## Index.js
1. we import react dom. There are 2 different dependencies `react` and `react-dom` in `package.json` but these 2 from the react library. 
2. More details in the files
3. Whatever we do on react can be done using vanilla js and html. It would be imperative because you specify exactly what you want to do. This can get cumbersome.
    - React is declarative: we just define the end state, react will settle how its shown.


## 33. First custom component
1. Look at which components you need to make.
2. Best practice to put new components into new files. 1 file per component. So good idea to create a `components` folder
3. We build a component tree starting from App.js!
    - Only the topmost component ie App.js is rendered directly onto the page.
4. Best practice to start with Caps and CamelCase eg. ExpenseItem.js
5. **Component is basically function!**
6. Custom components must start with Captial Letters!

## 34. More complicated JSX
1. Components can only have one html element! So usually people will wrap chuncks into one div.
2. Use "Format Document" to auto format in VSCode (though it didnt work for me).

## 35. Adding Basic CSS styling
1. We write `className` instead of `class` because class is already used by js.
2. DON'T FORGET TO `import "./ExpenseItem.css";` !

## 36. Outputting Dynamic Data & Working with expressions in JSX
1. As discussed previously, we want react to be coded once and reused everywhere.
2. Currently, we hardcode the answer but we can make it slightly better by using variables in the component
3. Use variables in components with `{}`
    - You can do js expressions inside it! eg. `expenseDate.toISOString()`, `expensePrice.toFixed(2)`.


## 37. Passing Data via Props
1. Reuse components by copy pasting the react elements into App.js
2. Rn, the variables are baked into the component function. We can change that now!
3. Components cant use data stored in other components directly. They need to be passed as props aka properties.

## 38. Adding 'normal' js logic to components
1. when transforming values using js functions, need to google more.
    - W3schools shows all arguments!: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
2. try doing it your own way before seeing how he does it.

## 39. Splitting components into multiple components
1. no hard rule of whether to add or split components
    - In this case the date component feels quite a lot so we make it a separate component!
2. DON'T forget to export and import on both files
3. For components with no content, both are valid.
```js
      <ExpenseItem 
        title = {expenses[0].title} 
        amount = {expenses[0].amount} 
        date = {expenses[0].date}
      />
      <ExpenseItem 
        title = {expenses[1].title} 
        amount = {expenses[1].amount} 
        date = {expenses[1].date}>
      </ExpenseItem>
```
4. We are basically funneling props to each component! app.js -> expenseItem -> expenseDate!

# Assignment: Create Expenses Component
1. Done, but forgot to import css styles into `Expenses.js`.

# 40. The Concept of Composition: children props
1. `props.children`: get html componenets in a wrapper component.
2. `props.className`: to get the styles used in the children components.
3. The point of this is to minimize code duplication. Because we can extract html components and store it in a wrapper.
4. You will not see these custom compoenents when inspecting. This is because they are just made up of the html components you built them on!