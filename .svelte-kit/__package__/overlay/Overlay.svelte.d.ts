import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        animationDuration?: number | undefined;
        isOpen?: boolean | undefined;
        doOpen?: ((open?: boolean) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type OverlayProps = typeof __propDef.props;
export type OverlayEvents = typeof __propDef.events;
export type OverlaySlots = typeof __propDef.slots;
export default class Overlay extends SvelteComponentTyped<OverlayProps, OverlayEvents, OverlaySlots> {
    get doOpen(): (open?: boolean) => void;
}
export {};
