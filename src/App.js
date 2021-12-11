
import './App.css';
import logo from './img/trello-logo.png';
import trello from './img/trello.png';

function App() {
  return (
    <div className="body">
      <div className="header">
        <div className="logo">
          <a href="/home">
            <img src={logo} alt="trello-logo"/>
          </a>
        </div>
        <div className="sign-in-sign-up">
          <div className="sign-in">
            <a href="/login">
              <span>Log in</span>
            </a>
          </div>
          <div className="sign-up">
            <a href="/sign up">
              <spa>Sign up</spa>
            </a>
          </div>
        </div>
      </div>
        <div className="content">
        <div className="left-content">
          <div className="main-content">
             <h1>Trello helps teams move to work forward </h1>
             <p>Collaborate, manage projects, and reach new productivity peaks.
                   From high rises to the home office, 
                   the way your team works is unique—accomplish it all with Trello.</p>
          </div>
          <form className="input-button">
             <input name="email" type="email" placeholder="Email"/>
             <div className="btn-control">
                <button type="submit">Sign Up-it's free</button>
              </div>
                            
          </form>
          </div>
        <div className="right-content">
          <img  src={trello} style={{ width:450,height:450}} alt="Trello" />
        </div>
      </div>
      </div>
     
    
  );
}

export default App;
