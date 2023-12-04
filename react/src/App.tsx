import React, { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { Home } from "./components/Home.tsx";
import { About } from "./components/About.tsx";

import { VueApp } from "./components/VueApp.tsx";
import { VueAppPage } from "./components/VueAppPage.tsx";

const App: React.FC = () => {
    return (
        <>
            <Router>
            <VueRouterHook />
            <VueApp />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/edit" element={<VueAppPage />} />
            </Routes>
            </Router>
        </>
    );
};

// const REACT_ROUTER_EVENT = 'REACT_ROUTER_EVENT';
const VUE_ROUTER_EVENT = 'VUE_ROUTER_EVENT';

/**
 * vue-router の state を React から操作するための Hook
 *
 * Custom Hook で null を返すのは
 * React Router の useLocation を使用するために、<Router> の中に配置する必要があるため
 */
const VueRouterHook = () => {
    const location = useLocation();

    const handleVueRouterEvent = useCallback((e: any) => {
        console.log('[React]: handleVueEvent', e.event.type);
    },[]);

    useEffect(() => {
        window.addEventListener(VUE_ROUTER_EVENT, handleVueRouterEvent);
        return () => {
            window.removeEventListener(VUE_ROUTER_EVENT, handleVueRouterEvent);
        };
    }, [location, handleVueRouterEvent]);

    return null;
};

export default App;
