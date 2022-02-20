/*
This app function just returns a html element
- Again, from JSX which is why there is html in js file
- JSX: JavaScript XML! HTML is basically XML


To see the transformed code:
Inspect on Google Chrome / go to Sources / static. You will see .js files and they are very cryptic. 
- That is basically the transformed code and also has all the React code there too!
- This shows that react is way more developer friendly.
*/
import Expenses from "./components/Expenses";
import Card from "./components/Card";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 2),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Card className = 'expenses'>
      <h2>Hello World!</h2>
      <p>This is also visible</p>
      <Expenses expenses = {expenses}></Expenses>
    </Card>
  );
}

export default App;
