
import './App.css';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Content from './Components/Content';

function App() {
  return (
  //<div> untuk styling <>fragment sama seperti div
  <>
    <Header/>
    <Hello/>
    <Content/>
  </>
  );
}
export default App;
