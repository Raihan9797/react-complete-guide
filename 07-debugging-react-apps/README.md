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
  - may also be in different subfolder so look around
  - add breakpoints by clicking on the line
