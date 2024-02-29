import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import First from './Components/First';
import Comp from './Components/Comp';
import Category from './Components/Category';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      
      <First/>
      <Comp/>
      <Aboutus/>
      <Category/>
      <Footer/>
      
    </div>
  );
}

export default App;
