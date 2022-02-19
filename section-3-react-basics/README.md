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