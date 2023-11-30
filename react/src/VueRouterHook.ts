import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type VueRouterGoHookDetail = { type: 'go'; n: number };
type VueRouterReplaceHookDetail = { type: 'replace'; location: string };
type VueRouterPushHookDetail = { type: 'push'; location: string };
type VueRouterBeforeEachHook = { type: 'before-each' };
type VueRouterAfterEachHook = { type: 'after-each' };
type VueRouterDetail =
    | VueRouterGoHookDetail
    | VueRouterReplaceHookDetail
    | VueRouterPushHookDetail
    | VueRouterBeforeEachHook
    | VueRouterAfterEachHook;

type ReactRouterDetail = { type: 'transition-to'; location: string };

export const VueRouterHook = (): null => {
    const navigate = useNavigate();

    const onGoHook = useCallback(
        (detail: VueRouterGoHookDetail) => {
            debugLog('[React] onGo', detail.n);
            navigate(detail.n); // Note: 'navigate' does not have an equivalent for 'go'. This might need a different approach.
        },
        [navigate],
    );

    const onReplaceHook = useCallback(
        (detail: VueRouterReplaceHookDetail) => {
            debugLog('[React] onReplace', detail.location);
            navigate(detail.location, { replace: true, state: { fromVueRouter: true } });
            dispatchReactRouterEvent({
                type: 'transition-to',
                location: detail.location
            });
        },
        [navigate],
    );

    const onPushHook = useCallback(
        (detail: VueRouterPushHookDetail) => {
            debugLog('[React] onPush', detail.location);
            navigate(detail.location, { state: { fromVueRouter: true } });
            dispatchReactRouterEvent({
                type: 'transition-to',
                location: detail.location
            });
        },
        [navigate],
    );

    const onHandleVueRouterEvent = useCallback(
        (event: CustomEvent<VueRouterDetail>) => {
            if (event.detail.type === 'go') {
                onGoHook(event.detail);
            } else if (event.detail.type === 'push') {
                onPushHook(event.detail);
            } else if (event.detail.type === 'replace') {
                onReplaceHook(event.detail);
            }
        },
        [onGoHook, onPushHook, onReplaceHook],
    );

    useEffect(() => {
        window.addEventListener(vueRouterEvent, onHandleVueRouterEvent as EventListener);
        return () => {
            window.removeEventListener(vueRouterEvent, onHandleVueRouterEvent as EventListener);
        };
    }, [onHandleVueRouterEvent]);

    return null;
}

const vueRouterEvent = 'vue-router-event';
const reactRouterEvent = 'react-router-event';

const logEnability = localStorage.getItem('blocks-vue-react-integration-debug-log');
const debugLog = (...args: unknown[]) => {
    logEnability && console.log(...args);
};

function dispatchReactRouterEvent(detail: ReactRouterDetail) {
    window.dispatchEvent(
        new CustomEvent(reactRouterEvent, {
            detail,
        }),
    );
}

