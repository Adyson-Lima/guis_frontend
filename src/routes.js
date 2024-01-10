import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guis from './pages/Guis';
// import NewUpdate from './pages/NewUpdate';

export default function GuisRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Guis/>} />
      </Routes>
    </BrowserRouter>
  );
}