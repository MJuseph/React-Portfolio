import React, {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';



class App extends Component {
  
  render(){
    return (
      <>
        <div className='App'>
          <BrowserRouter>
              <Route exact path='/' component={Main}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/contact' component={Contact}/>
          </BrowserRouter>
        </div>
      </>
    )
  }
}

export default App;
