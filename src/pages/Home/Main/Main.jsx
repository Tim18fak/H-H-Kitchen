import React,{useContext, useEffect, useState} from 'react'
import './main.scss'
import { MainImages } from './mainImages'
import { MealData } from '../../../../hooks/useContext'
import VideoComponent from '../../../components/Home/VideoCom/VideoComponent'

export default function Main({overlay}) {
 const Meal =  useContext(MealData) 
 const [starter,setStarter] = useState([])
 const [drink,setDrink] = useState([])
 const [mainCourse,setMainCourse] =  useState([])
 const [dessert,setDessert] = useState([])
 useEffect(() => {
  Meal.forEach(meal => {
   switch (meal.catergory) {
    case 'starter':
     setStarter([...starter,meal])
     break;
     case 'drinks':
     setDrink([...drink,meal])
     break;
     case 'mainCourse':
     setMainCourse([...mainCourse,meal])
     break;
     case 'dessert':
      setDessert([...dessert.meal])
     break;
   
    default:
     break;
   }
  })
 },[])
  return (
   <>
    <section className="HH__jumbostron HH__margin">
      <main>
        <h3>HARMONY HOUSE KITCHEN</h3>
        <h1>Taste Flavors 
          <img id='HH__jumbostron--textImage' src={`${MainImages.image9}`} alt="" srcset="" /> <br />from Around the <br />
          <img id='HH__jumbostron--textImage' src={`${MainImages.image10}`} alt="" srcset="" /> World</h1>
        <p><b>Harmony House Kitchen:</b> Where culinary excellence meets a symphony of flavors, creating a harmonious dining experience for every palate.</p>
      </main>
      <main className='HH__jumbostron-side-images-wrapper'>
        <figure className='HH__jumbstron-side-image-row1'>
          <img src={`${MainImages.image11}`} alt="" srcset="" />
          <span></span>
          <img src={`${MainImages.image12}`} alt="" srcset="" />
        </figure>
        
        <section className='HH__jumbstron-side-image-row2'>
          <figure>
            <img src={`${MainImages.image11}`} alt="" srcset="" />
            <img src={`${MainImages.image14}`} alt="" srcset="" />
          </figure>

          <figure >
          <span></span>
            <img src={`${MainImages.image15}`} alt="" srcset="" />
            
            <p>Since</p>
          </figure>
        </section>
      </main>
    </section>
   {/* about HH__Kitchen */}
   <section className='HH__about--kitchen HH__margin'>
    <figure id='HH__about--image'>
     <img src={`${MainImages.image7}`} alt="" srcset="" />
    </figure>
    {/* wrapper */}
    <main id='HH__about--content'>

     <div className='HH__about--row1'>

      <main>
      <h3>ABOUT H&H KITCHEN</h3>
      <h1>The Healthy Food For Wealthy Mood </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit hic quia incd ../ventore maxime esse aliquam nihil molestias.</p>
      </main>

      <figure>
       <img src={`${MainImages.image6}`} alt="" srcset="" />
      </figure>

     </div>
{/* break */}
     <div className='HH__about--row2'>
      <main id='HH__kitchen--offers'>
       <p>Online Order</p>
       <p>Pre-Booking</p>
       <p>24/7 Services</p>
       <p>Hygience Place</p>
       <button>Book Your Table</button>
      </main>
      <figure>
       <img src={`${MainImages.image2}`} alt="" srcset="" />
      </figure>
     </div>

    </main>

   </section>
   {/* Our Menu */}
   <section className='HH__menu HH__margin'>
    <h1 id='HH__menu--title'>Our Menu</h1>
    <nav className='HH__menu--option'>
     <h3 className='options option1'>Starters</h3>
     <h3 className='options option2'>Drinks</h3>
     <h3 className='options option3'>Main Course</h3>
     <h3 className='options option4'>Dessert</h3>
    </nav>
    {/* meal options */}
     <section className='HH__meal--billboard'>
     <main>
      <div className='HH__meal--grid'>
       {/* {starter && starter.length > 0 && starter.map((mealInfo,index) => {
         <div key={index}>
          <h2>{mealInfo.title}............${mealInfo.price}</h2>
          <p>{mealInfo.description}</p>
         </div>
       })} */}
       <p style={{
        color:'white'
       }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iusto illo nulla, blanditiis vitae deleniti perspiciatis! Obcaecati nisi sint ratione, delectus animi eaque! Unde inventore cumque sit accusamus, quas quod.</p>
      </div>
    </main>
    <aside className='HH__discount--offers'>
       <div>
        <h3>Meat Skewers</h3>
        <p><span>30%</span><br />
        OFF</p>
       </div>
      {/* video components */}
      <VideoComponent/>
    </aside>
     </section>
    {/* content of the meal info */}
   </section>

   {/* testimonies */}
   <section className='HH__testimonies HH__margin'>
    <div style={{
      backgroundImage: `linear-gradient(to right,rgb(0,0,0,.6),rgb(0,0,0,.6)),url(${MainImages.image5})`
    }}>
       <h1>50</h1>
       <p>Food Verities</p>
    </div>
    <div style={{
      backgroundImage: `linear-gradient(to right,rgb(0,0,0,.6),rgb(0,0,0,.6)),url(${MainImages.image5})`
    }}>
    <h1>7</h1>
    <p>Awards</p>
    </div>
    <div style={{
      backgroundImage: `linear-gradient(to right,rgb(0,0,0,.6),rgb(0,0,0,.6)),url(${MainImages.image8})`
    }}>
    <h1>125K</h1>
    <p>Happy Foodies</p>
    </div>
    <div style={{
      backgroundImage: `linear-gradient(to right,rgb(0,0,0,.6),rgb(0,0,0,.6)),url(${MainImages.image5})`
    }}>
    <h1>3</h1>
     <p>Branches</p>
    </div>
   </section>

   {/* newsletter */}
   <section className='HH__margin HH__newsletter'>
    <main>
     <h3>SUBCRIBE TO NEWSLETTER</h3>
     <p>Satisfaction is having more of soup. <br />
     FInd the tastiest dishes.</p>
    </main>
    <aside>
     <input type="text" placeholder='Your email address' id='email_address' />
     <label htmlFor="email_address">Subscribe</label>
    </aside>
   </section>
   {/* HH__images */}
    <section className='HH__images'>
      <figure>
       <img src={`${MainImages.image1}`} alt="" />
       <img src={`${MainImages.image2}`} alt="" />
       <img src={`${MainImages.image3}`} alt="" />
       <img src={`${MainImages.image4}`} alt="" />
       <img src={`${MainImages.image5}`} alt="" />
       <img src={`${MainImages.image6}`} alt="" />
      </figure>
    </section>

    {/* over-lay */}
    <div className='video--overlay'></div>
    </>
  )
}


