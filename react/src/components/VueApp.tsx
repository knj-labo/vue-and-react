import { useEffect, FC } from 'react';

import { VUE_APP_ID } from './vue-app-id.ts';

/**
 * vuejs を読み込むための page component.
 */
export const VueApp: FC = () => {
    useEffect(() => {
        // app.js は vuejs 本体より先に読み込む必要がある
        const appPath = '/dist/app.js';
        const appScript = document.createElement('script');
        appScript.src = appPath;
        appScript.setAttribute('id', 'vue-script');
        document.body.appendChild(appScript);

        // chunk-vendors.js は vuejs 本体より先に読み込む必要がある
        const chunkPath = '/dist/chunk-vendors.js';
        const chunkScript = document.createElement('script');
        chunkScript.src = chunkPath;
        chunkScript.setAttribute('id', 'chunk-script');
        document.body.appendChild(chunkScript);

        // Clean up
        return () => {
            const appScript = document.querySelector('#vue-script');
            if(appScript) appScript.remove();

            const chunkScript = document.querySelector('#chunk-script');
            if(chunkScript) chunkScript.remove();
        };
    }, []);

    return (
        <div id={VUE_APP_ID} hidden>
            <div id="vue-app" />
        </div>
    );
};