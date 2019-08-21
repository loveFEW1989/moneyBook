import React, {Component} from 'react';
import PriceList from './components/PriceList'
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'
import MonthPicker from './components/MonthPicker'
import {padLeft} from './utils'

import {LIST_VIEW, CHART_VIEW} from './utils'

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
      "type": "outcome",
      "iconName": "ios-plane"
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
      "type": "income",
      "iconName": "ios-plane"
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
     <TotalPrice income={20} outcome={100}/>
     <ViewTab activeTab={LIST_VIEW}
     onTabChange= {(view) => {console.log(view)}}
     />
     <PriceList  items={list} 
     onModifyItem={(item)=> {alert(item.id)}}
     onDeleteItem={(item)=> {alert(item.id)}}
     
     />
     <MonthPicker  year={2019} month = {padLeft(8)} />
     </div>
   )
 }
}

export default App;
