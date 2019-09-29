import React, { PureComponent } from 'react';
import { GlobalStyled } from './style';
import { Iconfont } from './statics/iconfont/iconfont.js';
import Header from './common/Header';

class App extends PureComponent {
  render() {
    return (
      <div>
        <GlobalStyled/>
        <Iconfont/>
        <Header/>
      </div>
    )
  }
}

export default App;