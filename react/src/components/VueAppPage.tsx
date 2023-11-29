import { useEffect, FC } from 'react';

import { VUE_APP_ID } from './vue-app-id.ts';

/**
 * vue-app の表示非表示を制御するための page component.
 */
export const VueAppPage: FC = () => {
    useEffect(() => {
        showVueApp();
        return () => {
            hideVueApp();
        };
    }, []);
    return null;
};

function showVueApp() {
    const vueApp: HTMLElement | null = document.querySelector(`#${VUE_APP_ID}`);
    if (!vueApp) return;
    vueApp.hidden = false;
}

function hideVueApp() {
    const vueApp: HTMLElement | null = document.querySelector(`#${VUE_APP_ID}`);
    if (!vueApp) return;
    vueApp.hidden = true;
}