import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

/*
then we use the render function

2nd element uses normal javascript to get element root.
- This html element (even though we havent made any html) is in `public` folder. This is the only html file as React is usually a Single Page Application!
- this html file has one element which is id as 'root'!

1st element is this App object. Its also a file we have.
It uses JSX ie `<App />` which renders in place of the 'root' element.

*/

ReactDOM.render(<App />, document.getElementById('root'));
