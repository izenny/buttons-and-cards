
import './App.css';
import Like from './Components/Like';
import Likebutton from './Components/Like/Likebutton';
import Loginbutton from './Components/Login/Loginbutton';
import Useradd from './Components/Profile/Useradd';
import Signupbutton from './Components/Signup/Signupbutton';

function App() {
  return (
    <div className="App">
      {/* <Like/> */}
      {/* <Likebutton/> */}
      <Loginbutton/>
      <Signupbutton/>
      <Useradd/>
    </div>
  );
}

export default App;
