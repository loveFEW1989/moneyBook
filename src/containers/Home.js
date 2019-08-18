import React, { Component } from 'react';
import PriceList from '../components/PriceList'
import '../App.css'
import Header from '../components/Header'
import ViewTab from '../components/ViewTab'
import CreateBtn from '../components/CreateBtn'
class Home extends Component {
  constructor(props) {
    super(props)
   this.state = {
     lists: [
       {name:'吃饭',price: 200,time:'2019-08-17'},
       {name:'买手机',price: 1200,time:'2019-08-17'},
       {name:'逛街',price: 300,time:'2019-08-19'}
     ]
   }
   this.delete = this.delete.bind(this)
  }
  delete(index) {
    let listss = this.state.lists
    listss.splice(index,1)
    this.setState({
      lists:listss
    })
  }
  render() { 
    return ( 
      <div>
      <Header/>
      <ViewTab /> 
      <CreateBtn/>
      {
        this.state.lists.map((item,index) => {
       return    <PriceList key={index} name={item.name} delete={this.delete} price={item.price} time={item.time}/>
        })
      }
     

     
      </div>
     );
  }
}
 
export default Home;
