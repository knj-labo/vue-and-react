import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function renderApp() {
    const rootElement = document.getElementById('root');

    if (!rootElement) {
        console.error('Failed to find the root element');
        return;
    }

    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

renderApp();
