import './App.css';
import { Route, Switch } from 'react-router-dom';
/*Componentes Principales*/
import Header from './components/Header';
import Footer from './components/Footer'
/*Paginas*/
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from "./pages/NotFound";
import Results from './pages/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detalle/:id" component={Detail}/>
        <Route path="/results" component={Results}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
