import React, {Component} from 'react';
import '../App.css'
import PriceList from '../components/PriceList'
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import Ionicon from 'react-ionicons'



import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME  } from '../utils'

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

class Home extends Component {
  render() {
    let totalIncom = 0, totalOutcom = 0
    list.forEach((item)=> {
      if(item.category.type === totalIncom) {
        totalIncom+=item.price
      } else {
        totalOutcom+=item.price
      }
    })
    return (
     <React.Fragment>
     <header className="App-header">
     <div className="row">
     <div className="col">
     <MonthPicker
     year={2019}
     month={8}
     onClick={()=> {}}
     />
     </div>
     <div className="col">
     <TotalPrice
     income={totalIncom}
     outcome={totalOutcom}
     />
     </div>
     
     </div>
       
     </header>

     <div className="content-area py=3 px=3">
     <ViewTab  activeTab={LIST_VIEW} onTabChange={()=>{}}  />
     <CreateBtn  onCLick={()=> {}} />
     <PriceList 
     items={list}
     onModifyItem={()=> {}}
     onDeleteItem={() => {}}
     
     />
     
     </div>
     
     
     
     </React.Fragment>




    )
  }
}

export default Home