import { useEffect, FC } from 'react';

import { VUE_APP_ID } from './vue-app-id';

/**
 * vuejs を読み込むための page component.
 */
export const VueApp: FC = () => {
    useEffect(() => {
        const builderUrl = '/vue-app.js';
        const script = document.createElement('script');
        script.src = builderUrl;
        script.setAttribute('id', 'vue-app');
        document.body.appendChild(script);

        return () => {
            const script = document.querySelector('#vue-app');
            if (script) script.remove();
        };
    }, []);

    return (
        <div id={VUE_APP_ID} hidden>
            <div id="wrapper" />
            <h1>Hello! VueApp</h1>
        </div>
    );
};