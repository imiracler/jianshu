import React, { PureComponent } from 'react';
import { GlobalStyled } from './style';
import { Iconfont } from './statics/iconfont/iconfont.js';
import Header from './common/Header';
import {Provider} from 'react-redux';
import store from './store';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <GlobalStyled/>
          <Iconfont/>
          <Header/>
        </Provider>
      </div>
    )
  }
}

export default App;