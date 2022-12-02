// 1) Import the React and ReactDOM libraries
//import React from 'react';
//import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
/*const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  return <h1> Name : Sathya Narayanan <br/>
    Skill : Research, Communication  <br/>
    Ambition : To Succeed
  </h1>;
}

// 5) Show the component on the screen
root.render(<App />);*/

import React from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
  module.hot.accept();
}


  
class App extends React.Component{
  constructor(props){
    super(props);
   /* this.state = {lat: null}
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude});
      },
      (err) => console.log(err)
    );*/
    this.setState = ({Company: "Incedo"})
    this.setState = ({Venue: "Chennai"})
    this.setState = ({Motto: "Winning The Digital Age"})

  }
  render(){
 
    return <div>Company: Incedo<br/>
    Venue: Chennai<br/>
    Motto: Winning The Digital Age</div>
  }
}
/*const App = () =>{
  return <div>Hi there!</div>;
};*/

ReactDOM.render(<App/>, document.querySelector("#root"));