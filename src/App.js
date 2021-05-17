
import './App.css';
import Component from "./profile/Component";
import PropTypes from 'prop-types';
import { defaultProps } from 'default-props'
function App() {
  let fullname="badiaa";
 let age=26;
 let profession="engineer";
 const alertMe=()=>{alert({fullname})}
  return (
    <div className="App">
<Component fullname={fullname} age={age} profession={profession} alertMe={alertMe}/>

    </div>
  );
}

export default App;
