import React, {Component} from 'react';
import '../App.css'
import PriceList from '../components/PriceList'
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import Ionicon from 'react-ionicons'



import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME ,parseToYearAndMonth,padLeft } from '../utils'
const categoies = {
 "1": {
   "id": "1",
   "name": "旅行",
   "type": "outcome",
   "iconName": "ios-plane"
 },
 "2": {
  "id": "2",
  "name": "理财",
  "type": "income",
  "iconName": "logo-yen"
},

}
const list = [
  {
    "id":1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2019-08-10",
    "cid":1
  },
  {
    "id":2,
    "title": "去贵州旅游",
    "price": 400,
    "date": "2019-07-18",
    "cid": 1
  },
  {
    "id":3,
    "title": "理财",
    "price": 400,
    "date": "2019-08-18",
    "cid": 2
  }
]

const newItem = {
  "id": 4,
  "title": "新添加的项目",
  "price": 300,
  "date": "2019-07-10",
  "cid": 1
}
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    }
  }
  changeView = (view) => {
    this.setState({
      tabView: view
    })
  }
  changeDate = (year,month) => {
    this.setState({
      currentDate: {year,month}
    })
  }
  createItem = () => {
  this.setState({
    list: [newItem,...this.state.list]
  })
  }

  modifyItem = (modifyItem) => {
 
    const modifyItems = this.state.list.map((item) => {
      if(item.id === modifyItem.id) {
        return {...item, title: '修改后的标题'}
      } else {
        return item
      }

    })
    this.setState({
      list: modifyItems
    })
   
  }
  
  deleteItem = (deletedItem) => {
   const filterItems = this.state.list.filter(item=> item.id !== deletedItem.id)
   this.setState({
      list: filterItems 
   })
  }

  render() {
    const {list, currentDate, tabView} = this.state
    const listWithCategory = list.map(item => {
     item.category = categoies[item.cid]
     return item
    }).filter(item => {
      return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
    })

    let totalIncom = 0, totalOutcom = 0
    listWithCategory.forEach((item)=> {
      if(item.category.type === TYPE_OUTCOME) {
        totalOutcom+=item.price
      } else {
        totalIncom+=item.price
      }
    })
    return (
     <React.Fragment>
     <header className="App-header">
     <div className="row">
     <div className="col">
     <MonthPicker
     year={currentDate.year}
     month={currentDate.month}
     onChange={this.changeDate}
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
     <ViewTab   activeTab={tabView} onTabChange={this.changeView}  />
     <CreateBtn  onCreateCLick={this.createItem} />
     { tabView === LIST_VIEW &&
      <PriceList 
      items={listWithCategory}
      onModifyItem={this.modifyItem}
      onDeleteItem={this.deleteItem}
      
      />
     }
     {
       tabView=== CHART_VIEW &&
       <h2>这里是图表模式</h2>

     }
     
     
     </div>
     
     
     
     </React.Fragment>




    )
  }
}

export default Home