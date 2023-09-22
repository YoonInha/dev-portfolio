import FirstPage from "./pages/index";
import PrgSchoolOfHorror from "./pages/prgSchoolOfHorror";
import PrgEstelayer from "./pages/prgEstelayer";
import PrgLumenStyler from "./pages/prgLumenStyler";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<FirstPage />} />
        {/* <Route path="/schoolofhorror" element={<PrgSchoolOfHorror />} />
        <Route path="/estelayer" element={<PrgEstelayer />} />
        <Route path="/lumenstyler" element={<PrgLumenStyler />} /> */}
      </Routes>
    </BrowserRouter> 
  );
}

export default App;