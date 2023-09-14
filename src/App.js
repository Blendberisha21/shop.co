import React from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import "./index.css";
import Firm from './components/firms/Firm';
import Buy from './components/buy/Buy';
import Browse from './components/browse/Browse';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
       <Header/>
       <Body/>
       <Firm/>
       <Buy/>
       <Browse/>
       <Footer/>
    </div>
  )
}

export default App