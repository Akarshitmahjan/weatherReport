// import React from 'react'

// function App(){
//     return <h1>Akarshit Gupta</h1>
// }

// JSX
// const App=()=>{
//     // JSX
//     return(
//         <>
//             <h1 className='myClass'>Welcome</h1>
//             <p>Study to know more</p>
//             <img src='' alt=''></img>
        
//         </>
//     );
// };

// Nested component
// const App=()=>{
//     // JSX
//     return(
//         <>
//         <MyName/>
//             <h1 className='myClass'>Welcome</h1>
//             <p>Study to know more</p>
//             <img src='' alt=''></img>
        
//         </>
//     );
// };
// const MyName = ()=>{
// return <h1>My name is Akarshit Gupta</h1>;
// };

// how react achtually looking into it (we can also use this cz this is old react component)

// const App =()=>{
//     return React.createElement("h1",{},"Hello World");
// };

import React from "react";
// import Resturant from "./component/Basics/Resturant";
// import UseState from "./component/Hooks/useState";
// import UseEffect from "./component/Hooks/useEffect";
// import UseReducer from "./component/Hooks/useReducer";
// import Todo from "./component/todolist/todo";
import Temp from "./component/weather/temp";
// import Weathercard from "./component/weather/weathercaed";
import Weathercard from "./component/weather/weathercard";
const App = () => {
  return <>    
  <Temp/>
  </>;
};

export default App;
