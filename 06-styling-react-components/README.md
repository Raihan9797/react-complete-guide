# Section 6: Styling React components

## 75. Setting Dynamic Styles
1. Currently, all css styles are not scoped ie they are global.
2. Additionally we want to highlight things to be red when input is wrong. 
    - Eg. we dont want users to add empty goals. We cant just prevent that but how do we let the user know? By using a state
3. Dynamicall change inline. 
    - style takes in an object!
    - they are the highest priority if you set it inline
4. We can change the color if input is invalid. To change back to normal, just check that the input length is > 0