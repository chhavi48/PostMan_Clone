import './App.css';
import Main from './Components/Main';
import Dataprovider from './Context/Dataprovider';



function App() {
  return (
  
    <Dataprovider>
        <Main/>
    </Dataprovider>

  
  );
}

export default App;
