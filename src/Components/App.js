import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import cookies from 'universal-cookie';

import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Home'
import Header from './Header' 
import Login from './Login'
import Register from './Register'
import ManageProduct from './ManageProduct'
import ProductItem from './ProductItem'
import DetailProduct from './DetailProduct'

import {keepLogin} from '../Actions'


const cookie= new cookies()

class App extends Component {
  componentDidMount(){
      var userCookie= cookie.get('stillLoggedIn')
      // jika didapatkan username di file cookie,akan memanggil function keepLogin
      if(userCookie !==undefined){
        console.log("cookie ada")
        // function keepLogin akan me-loginkan ulang username yg tersimpan pada file cookie
        this.props.keepLogin(userCookie)
      }
  }



render(){
  return(
    <BrowserRouter>
    <div>
    <Header/> 
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/manageproduct" component={ManageProduct}/>
    <Route path="/detailproduct/:asdfg" component={DetailProduct}/>
    </div>
    </BrowserRouter>
    
  )
}


}
export default connect(null,{keepLogin})(App);