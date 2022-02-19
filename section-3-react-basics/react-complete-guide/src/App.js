/*
This app function just returns a html element
- Again, from JSX which is why there is html in js file
- JSX: JavaScript XML! HTML is basically XML


To see the transformed code:
Inspect on Google Chrome / go to Sources / static. You will see .js files and they are very cryptic. 
- That is basically the transformed code and also has all the React code there too!
- This shows that react is way more developer friendly.
*/
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Hello World!</h2>
      <p>This is also visible</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
