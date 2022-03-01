import './App.css';
import Counter from './components/counter';
import  { Provider } from "react-redux"
import { store } from './redux/store';
import UserContainer from './components/UserContainer';
function App() {
console.log("rendering app..")

  return (
    <Provider  store={store} >
      <div className="App">
        <Counter/>
        <UserContainer/>
        
      </div>
    </Provider>
    );
}

export default App;
