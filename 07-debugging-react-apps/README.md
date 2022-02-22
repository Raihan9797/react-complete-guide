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