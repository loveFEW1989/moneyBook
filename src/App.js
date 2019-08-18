import React, {Component} from 'react';
import PriceList from './components/PriceList'
import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//   return (
//     <div className="App">
//      <PriceList/>
//     </div>
//   );
// }
const list = [
  {
    "id":1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2019-8-10",
    "category": {
      "id":"1",
      "name": "旅游",
      "type": "outcome"
    }
  },
  {
    "id":2,
    "title": "去贵州旅游",
    "price": 400,
    "date": "2019-8-18",
    "category": {
      "id":"1",
      "name": "旅游",
      "type": "income"
    }
  }
]
class App extends Component {
 constructor(props) {
   super(props)
   this.state = {}
 }
 render() {
   return (
     <div>
     <PriceList  items={list} 
     onModifyItem={(item)=> {alert(item.id)}}
     onDeleteItem={(item)=> {alert(item.id)}}
     
     />
     </div>
   )
 }
}

export default App;
