// import React from 'react'
// import Home from './Home.jsx'

// const App = (second) => {     //jsx
// // let user="manu";
//   return (
//     <div>
//       {/* <h1>hello {user}</h1> */}
//       <Home  c={second.data} />
//     </div>
//   )
// }

// export default App;
// _______________________________________________-huge state
// import React, { useState } from "react";
// import './App.css'
// const App = () => {
//   let [Count, setCount] = useState(0);

//   function fun1() {
//     setCount(++Count);
//   }

//   return (
//     <div>
//       <p>{Count}</p>
//       <button onClick={fun1}>add</button>
//     </div>
//   )
// }

// export default App;



// ___________________________________________________continious watch

// import React, { useState } from 'react'

// function App() {
//   let[time,setTime]=useState()

//   setInterval(() => {
//     let date= new Date().toLocaleTimeString();
//     setTime(date);
//   });
//   return (
//     <div>
//       <p>{time}</p>
//     </div>
//   )
// }

// export default App

///____________________

import React from 'react'

function App() {
  return (
    <div>
      <p>hello</p>
    </div>
  )
}

export default App