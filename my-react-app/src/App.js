import './App.css';
import Card from './Components/Card';
import{person} from "./Utils/person";

function App() {
  return (
    <>
        {person.map((item) => {
        return(
            <Card 
              name ={item.name} 
              institution={item.institution}
              addres={item.addres}
              phoneNumber={item.phoneNumber}
            />
        );
    })}
  </>
  );
}

export default App;
