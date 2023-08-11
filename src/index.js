// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// //import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Input from "./pages/Input";
// import Output from "./pages/Output";
// ///import NoPage from "./pages/NoPage";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// /*
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// */

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
        
// //        {/* <Route path="/" element={<Layout />}> */
// //        }


// //           <Route index element={<Home />} />
// //           <Route path="input" element={<Input />} />
// //           <Route path="output" element={<Output />} />
// //           <Route path="*" element={<NoPage />} />
// //         {/* </Route> */}
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <React.StrictMode>
//     <BrowserRouter>
//        <App />
//     </BrowserRouter>
//  </React.StrictMode>
// );


// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode>
);