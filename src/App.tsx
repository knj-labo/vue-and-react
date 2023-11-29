import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Editor } from "./components/Editor";
import { Publish } from "./components/Publish";

// Uncomment these imports as needed
// import { lazy } from "react";
// import VueRouterHook from "./VueRouterHook";
// import { VueAppPage, VueApp } from "./components/VueApp";
// const Editor = lazy(() => import("./components/Editor"));

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Editor />} />
                <Route path="/publish" element={<Publish />} />
                {/* Uncomment these lines as needed */}
                {/* <Route path="/vue-page" element={<VueAppPage />} /> */}
                {/* <VueRouterHook /> */}
                {/* <VueApp /> */}
            </Routes>
        </Router>
    );
};

export default App;
