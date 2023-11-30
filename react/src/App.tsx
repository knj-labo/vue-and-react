import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Publish } from "./components/Publish.tsx";

import { VueApp } from "./components/VueApp.tsx";
import { VueAppPage } from "./components/VueAppPage.tsx";
import { VueRouterHook } from "./VueRouterHook.ts";

const App: React.FC = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<VueAppPage />} />
                <Route path="/publish" element={<Publish />} />
            </Routes>
            <VueRouterHook />
        </Router>
        <VueApp />
        </>
    );
};

export default App;
