import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home.tsx";
import { About } from "./components/About.tsx";

import { VueApp } from "./components/VueApp.tsx";
import { VueAppPage } from "./components/VueAppPage.tsx";

const App: React.FC = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/edit" element={<VueAppPage />} />
            </Routes>
        </Router>
        <VueApp />
        </>
    );
};

export default App;
