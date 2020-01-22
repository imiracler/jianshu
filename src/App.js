import React, { PureComponent } from 'react';
import { GlobalStyled } from './style';
import { Iconfont } from './statics/iconfont/iconfont.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Header from './common/Header';
import {Provider} from 'react-redux';
import store from './store';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <GlobalStyled/>
            <Iconfont/>
            <Header/>
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    )
  }
}

export default App;