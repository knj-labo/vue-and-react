import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Editor = lazy(() => import("./components/Editor"));
import { Publish } from "./components/Publish";

import { VueApp } from "./components/VueApp";
import { VueAppPage } from "./components/VueAppPage";
import { VueRouterHook } from "./VueRouterHook";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Editor />} />
                <Route path="/publish" element={<Publish />} />
                 <Route path="/vue-page" element={<VueAppPage />} />
            </Routes>
            <VueRouterHook />
            <VueApp />
        </Router>
    );
};

export default App;
