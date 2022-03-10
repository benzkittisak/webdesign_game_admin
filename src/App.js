import {Routes , Route} from 'react-router-dom';

import './assets/styles/style.scss';
import AddProduct from './components/add-product/add-product-component';
import ConsolePage from './page/console/console.component';

import LoginPage from './page/login/login.component';

function App() {
  return (
   <>
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route path="/console" element={<ConsolePage/>} />
      <Route path="/console/add_product" element={<AddProduct/>} />  
    </Routes>
   </>
  );
}

export default App;
