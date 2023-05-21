import '../blocks/app.css';
import '../blocks/card.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main';

function App() {
  const temp= "90"
  return (
    <div>
      <Header/>
      <Main temp={temp}/>
      
      <Footer/>


    </div>
  );
}

export default App;
