import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";


function App() {
  return (
 <div>
  <Router>
   <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

  </Router>
 </div>
  );
}

export default App;
  