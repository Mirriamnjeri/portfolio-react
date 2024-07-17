import React from "react";
import Hero from "./components/Hero";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}