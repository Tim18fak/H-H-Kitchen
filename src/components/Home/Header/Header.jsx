// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./header.scss";
// const Header = ({}) => {
//   const [showTag, setShowTag] = useState(false);
//   const [checkBtn,setBtn] = useState(null)
//   useEffect(() => {
//     // to prevent the tagoption from showing when the label toggle is triggered again when closing
//     let count = 1;
//     document
//       .querySelector(".HH__nav")
//       .addEventListener("transitionend", function (e) {
//         if (e.propertyName === "height" && showTag && count <= 1) {
//           document.querySelector(".HH__nav ul").style.width = "100%";
//           document.querySelector(".HH__nav ul").style.opacity = 1;
//           count++;
//         }
//       });

//     document
//       .querySelector(".HH__nav")
//       .addEventListener("transitionstart", function (e) {
//         if (e.propertyName === "height" && !showTag) {
//           document.querySelector(".HH__nav ul").style.backgroundColor = "";
//           document.querySelector(".HH__nav ul").style.width = "0";
//           document.querySelector(".HH__nav ul").style.opacity = 0;
//           console.log(count);
//         }
//       });
//   }, [showTag]);

//   return (
//     <>
//       <input type="checkbox" name="" id="navCheck" />
//       <nav className="HH__nav">
//         <section className={`HH__nav--section `}>
//           <label htmlFor="navCheck" onClick={() => setShowTag(!showTag)}>
//             <p></p>
//           </label>
//           <h3>H&H KITCHEN</h3>
//           <button>Book a Meal Now</button>
//         </section>
//         <ul>
//           <Link to={'/'}><li>Home</li></Link>
//           <Link to={'/about'}><li>About</li></Link>
//           <Link to={'/contact'}><li>Contact</li></Link>
//           <li>Register Now</li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = ({overlay}) => {
  const [navOpenBtn,setBtn] = useState(false)
  return (
    <>
        <nav className={`${navOpenBtn ? 'HH__nav show': 'HH__nav hide'}`}>
         <section className=''>
           <label htmlFor="" id={`${navOpenBtn ? 'HH__nav--triger-on': 'HH__nav--triger-off'}`} onClick={() => setBtn(!navOpenBtn)}>
            <p></p>
           </label>
           <h3>H&H KITCHEN</h3>
           <button id="HH__book-meal" onClick={() => overlay(true)}>Book a Meal Now</button>
         </section>
         <aside>
         <ul className={`${navOpenBtn ? 'HH__nav--link-show': 'HH__nav--link-hide'}`}>
           <Link to={'/'}><li>Home</li></Link>
           <Link to={'/about'}><li>About</li></Link>
           <Link to={'/contact'}><li>Contact</li></Link>
           <li>Register Now</li>
         </ul>
         </aside>
       </nav>
     </>
  )
}

export default Header

