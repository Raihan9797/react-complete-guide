# Section 7: Debuggin react apps

## 84. Understanding React Error Messages
1. it tells you what file `./src/App.js`
2. What error (syntax error)
3. What location (line 43: col 6)
4. and shows the snippet
```
Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (43:6)
```
  - Googling this, you will see basically you need to return one div, not 2!


5. Typos will usually result in 'xxx' is not defined.


## 85. Analyzing code flow and warnings
1. If there are no compile errors but you see that its weird
  - Follow the code logic: the deletions are weird so check that. deletehandler seems ok and it depends on checking the id. So go and check the id next. Youl see id is hardcoded. Can fix by setting using math.random(). not perfect but ez.
  - check for warnings: you can see that when you add, it says there is the same keys!

## 86. Working with breakpoints
1. If you dont want to use the other methods, or they dont work, go `Sources` tab in the dev tools
  - allows u to see source files ie your code that are displayed. 
  - we can basically edit code in the page itself.

2. find your code on the side bar like this:
![your file location](https://github.com/Raihan9797/react-complete-guide/blob/07-debugging-react-apps/07-debugging-react-apps/images/Capture.PNG)
  - may be in different folders so look around

3. Set breakpoints by clicking on the line
  - use the blue buttons, to jump to the next function (the down button) or to just complete the function (the curved arrow)
  - you can hover over variables to see the values: you will see that "goal1" appears multiple times when deleting different goals which is not correct!
![your file location](https://github.com/Raihan9797/react-complete-guide/blob/07-debugging-react-apps/07-debugging-react-apps/images/breakpoints.PNG)


## 87. Using react dev tools
1. install "React Developer Tools" on chrome
2. on the console you will see `profile` and `components` tab. We will use components for now.
  - can see the component tree
  - click on them to get more data eg props!
3. we can se which components render these things
  - the top most is the item which is directly rendered
4. we can also see states in hooks! 
  - can change them. If its 2 way binding, you will see the change on the app!