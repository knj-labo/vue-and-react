import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Editor = lazy(() => import("./components/Editor.tsx"));
import { Publish } from "./components/Publish.tsx";

import { VueApp } from "./components/VueApp.tsx";
import { VueAppPage } from "./components/VueAppPage.tsx";
import { VueRouterHook } from "./VueRouterHook.ts";

const App: React.FC = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Editor />} />
                <Route path="/publish" element={<Publish />} />
                 <Route path="/vue-page" element={<VueAppPage />} />
            </Routes>
            <VueRouterHook />
        </Router>
        <VueApp />
        </>
    );
};

export default App;
