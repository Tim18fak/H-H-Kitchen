import React ,{ useState,useEffect } from 'react'
import {} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.css";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Main from './pages/Home/Main/Main';
import { MealData } from '../hooks/useContext';
import { arrayOfObjects } from './pages/Home/Main/mainImages';

const App = () => {
  const [hhMeal,setHHMeal] = useState([])
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
    <body className='HH__body'>
      <Header />
     <MealData.Provider value={hhMeal}>
     <Main/>
     </MealData.Provider>
      <Footer />
    </body>
  );
}

export default App
