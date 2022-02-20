# Section 4: React States & Working with Events

## 46. Listening to Events and Working with Event Handlers
1. Button element has native DOM events that we can listen to
    - search here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    - click on "Dom interface". You will see that the HTMLButtonElement comes the Element.
    - The Element has a few Events which has an equivalent in React! eg. `click` has an `onClick` equivalent in React!
2. onClick, we usually POINT to a function! DONT CALL IT
    - this is because when render, we will run through all the code. If we call it at that time then it would be too early in some cases.
    - This might be useful if you want to call something from the start!
3. We can create the function in line or outside
4. Naming convention of functions `xxxHandler` because you dont call it. And its attached to an event listener (onClick)