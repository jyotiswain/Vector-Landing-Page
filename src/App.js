import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Subbar from './components/Subbar';
import Vectorcards from './components/Vectorcards';
import Footer from './components/Footer';


const App = () => {
  return (
   <Layout>
    <Navbar/>
    <hr style={{marginTop:"3rem",
                    color:"grey",
                    size: "2px"}}/>

    <Heading/>
    <hr style={{marginTop:"3rem",
                    color:"grey",
                    size: "2px"}}/>
    
<div className="main">
<Subbar/>
<Vectorcards/>
</div>

<Footer/>

   </Layout>
  );
}

export default App;
