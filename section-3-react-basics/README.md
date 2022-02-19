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
4. Best practice to start with Caps and CamelCase eg. ExpenseItem.js
5. **Component is basically function!**
6. Custom components must start with Captial Letters!