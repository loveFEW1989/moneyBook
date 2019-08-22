import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'


// function App() {
//   return (
//     <div className="App">
//      <PriceList/>
//     </div>
//   );
// }

class App extends Component {
 constructor(props) {
   super(props)
   this.state = {}
 }
 render() {
   return (
     <div>
     <Home/>
     </div>
   )
 }
}

export default App;
