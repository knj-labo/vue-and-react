import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Uncomment these imports as needed
// import { lazy } from "react";
// import VueRouterHook from "./VueRouterHook";
// import { VueAppPage, VueApp } from "./components/VueApp";
// const Editor = lazy(() => import("./components/Editor"));

const App: React.FC = () => {
    return (
            <Router>
                {/* Uncomment these lines as needed */}
                {/* <Route exact path="/react-editor" component={Editor} /> */}
                {/* <Route exact path="/vue-page" component={VueAppPage} /> */}
                {/* <VueRouterHook /> */}
                {/* <VueApp /> */}
            </Router>
    );
};

export default App;
