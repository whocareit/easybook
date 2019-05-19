import React,{ Component } from 'react';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import { GStyle } from './statics/iconfont/iconfont.js'
import Header from './common/header/index.js';
import { BrowserRouter ,Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/details/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component{
    render(){
        return (
            <div>
                <Provider store = {store}>
                    <GlobalStyle/>
                    <GStyle/>
                    
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route path = '/' exact  component = {Home}></Route>
                            <Route path = '/detail/:id' exact component = {Detail}></Route>
                            <Route path = '/login' exact component = {Login}></Route>
                            <Route path = '/write' exact component = {Write}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default App;