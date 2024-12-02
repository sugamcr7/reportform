import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DataTable from "./components/DataTable";

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (newData) => {
    setFormData([...formData, newData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onSubmit={handleFormSubmit} />} />
        <Route path="/table" element={<DataTable data={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
