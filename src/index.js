import React from "react"
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';


import App from "./Components/App"
import reducers from './Reducers'

const store=createStore(reducers,applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.querySelector('#root')
)