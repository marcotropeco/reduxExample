import Home from "./pages/Home";
import Users from "./pages/Users";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return ( 

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;