import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Editor = lazy(() => import("./components/Editor"));
import { Publish } from "./components/Publish";

import { VueApp } from "./components/VueApp";
import { VueAppPage } from "./components/VueAppPage";
// Uncomment these imports as needed
// import VueRouterHook from "./VueRouterHook";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Editor />} />
                <Route path="/publish" element={<Publish />} />
                {/* Uncomment these lines as needed */}
                 <Route path="/vue-page" element={<VueAppPage />} />
                {/* <VueRouterHook /> */}
            </Routes>
            <VueApp />
        </Router>
    );
};

export default App;
