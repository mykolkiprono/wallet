import logo from './logo.svg';
import './App.css';

import Details from './details';
import Contact from './Contact';
import Blogs from './Blogs';
import home from './home';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />}>
          <Route index element={<home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
