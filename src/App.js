import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="profile">
    <div className="me"><img class="pp" src="me.png"/></div>
    <h3>Nwokike Chukwuebuka</h3>
  </div>
  <div className="links">
    <a href="">Twitter Link</a>
    <a href="https://hng-9-1.vercel.app/Zuri Team">Zuri Team</a>
    <a href="https://hng-9-1.vercel.app/Zuri Books">Zuri Books</a>
    <a href="">Python Books</a>
    <a href="">Background Check for Books</a>
    <a href="">Design Books</a>
    <div className="image">
      <a href="" className="img"><img src="slack.png" /></a>
       <a href="" className="img"><img src="github.png" /></a>
    </div>
  </div><hr />
  <footer>
    <img className="zuri" src="zuri.png">
    <p>HNG Internship 9 Frontend Task</p>
     <img className="zuri" src="ig.png">
  </footer>
    </div>
  );
}

export default App;
