import './App.css';
import ExpertsOpinion from './Components/ExpertOpinion';
import Header from './Components/Header';
import Preview from './Components/Preview';
import Product from './Components/Product';
import AppContext from '../src/init'
import { useState } from 'react';
import imgStore from './imgSlider';
import payLogo from './payLogo';

const AppProvider = ({children}) => {
  const shipping = [
    {
      h:'Free shipping in “Country”', 
      p: 'All purchases are shipped from our warehouse in “Country” and are fully insured with a tracking number. Tracked delivery between 2 - 4 days in “Country” + Free Delivery',
      isOpen: true
    },
    {
      h: '100% money-back guarantee',
      p: "If you're not satisfied with your Case, we offer a 100% Money Back Guarantee. No Questions Asked.",
      isOpen: true,
    },
    {
      h: '5 years warranty',
      p: "If you're not satisfied with your Case, we offer a 100% Money Back Guarantee. No Questions Asked.",
      isOpen: false,
    }
  ];
  const colors = ['grey', 'black', 'pink', 'white'];

  const [defaultColor, setDeafultColor] = useState('grey');
  const setColor = (color) => setDeafultColor(color);

  return (
    < AppContext.Provider value = {{ shipping, colors, defaultColor, setColor, imgStore, payLogo }}>{children}</AppContext.Provider>
  )
}

const App = () => {
  return (

    <AppProvider>
      <div className='about_product'>
        <Header />
        <Preview />
        <Product />
      </div>
      <ExpertsOpinion />
    </AppProvider>
  );
}

export default App;
