import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

class App extends React.Component{
    

    render(){
    return(
        <div>
            
        </div>
    )
  }
}
=======
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
>>>>>>> 1c995f33cdd65dffe07915591992ada7d761df66
