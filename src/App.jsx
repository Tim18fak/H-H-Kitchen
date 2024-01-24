import React ,{ useState,useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import "./global.css";
import './default.scss'
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Main from './pages/Home/Main/Main';
import { MealData } from '../hooks/useContext';
import { arrayOfObjects } from './pages/Home/Main/mainImages';
import Contact from './pages/Home/Contact/Contact'
import About from './pages/Home/About/About'
import Auth from './pages/Home/Auth/Auth';
const App = () => {
  const [hhMeal,setHHMeal] = useState([])
  const [overlay,setOverlay] = useState(false)
  useEffect(() => {
    console.log(overlay)
  },[overlay])
  useEffect(() => {
    // fetch('url')
    //   .then((response) => response.json())
    //   .then(data => {
    //     // Your code here
    //     data.json()
    //     .then(meal => {
    //       setHHMeal([1,2,3,4,5,6,])
    //     })
    //   })
    //   .catch(error => console.error(error));
    setHHMeal(arrayOfObjects)
  },[])
  return (
    <MealData.Provider value={hhMeal}>
    <div className={`${overlay? 'overlay--body': 'HH__body'}`}>
      <Router>
      <Header overlay={setOverlay} />
      <Routes>
        <Route path='/' element={ <><Main overlay={setOverlay}/> <Footer /></>}/>
        <Route path='/about' element={<><About/>  <Footer /></>}/>
        <Route path='/contact' element={ <Contact/>}/>
      </Routes>
      </Router>
    </div>
    <div className={`${overlay? 'overlay--show': 'overlay--hide'}`}>
      {/* <button className='HH__cancel--button' onClick={() => setOverlay(false)}>X</button> */}
      <Auth overlay={setOverlay}/>
    </div>
    </MealData.Provider>
  );
}

export default App
