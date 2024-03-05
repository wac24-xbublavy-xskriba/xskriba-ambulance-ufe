/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XskribaAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface XskribaAmbulanceWlEditor {
        "entryId": string;
    }
    interface XskribaAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface XskribaAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXskribaAmbulanceWlEditorElement;
}
export interface XskribaAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXskribaAmbulanceWlListElement;
}
declare global {
    interface HTMLXskribaAmbulanceWlAppElement extends Components.XskribaAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLXskribaAmbulanceWlAppElement: {
        prototype: HTMLXskribaAmbulanceWlAppElement;
        new (): HTMLXskribaAmbulanceWlAppElement;
    };
    interface HTMLXskribaAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLXskribaAmbulanceWlEditorElement extends Components.XskribaAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXskribaAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXskribaAmbulanceWlEditorElement, ev: XskribaAmbulanceWlEditorCustomEvent<HTMLXskribaAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXskribaAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXskribaAmbulanceWlEditorElement, ev: XskribaAmbulanceWlEditorCustomEvent<HTMLXskribaAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXskribaAmbulanceWlEditorElement: {
        prototype: HTMLXskribaAmbulanceWlEditorElement;
        new (): HTMLXskribaAmbulanceWlEditorElement;
    };
    interface HTMLXskribaAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLXskribaAmbulanceWlListElement extends Components.XskribaAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXskribaAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXskribaAmbulanceWlListElement, ev: XskribaAmbulanceWlListCustomEvent<HTMLXskribaAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXskribaAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXskribaAmbulanceWlListElement, ev: XskribaAmbulanceWlListCustomEvent<HTMLXskribaAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXskribaAmbulanceWlListElement: {
        prototype: HTMLXskribaAmbulanceWlListElement;
        new (): HTMLXskribaAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "xskriba-ambulance-wl-app": HTMLXskribaAmbulanceWlAppElement;
        "xskriba-ambulance-wl-editor": HTMLXskribaAmbulanceWlEditorElement;
        "xskriba-ambulance-wl-list": HTMLXskribaAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface XskribaAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface XskribaAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: XskribaAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface XskribaAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: XskribaAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "xskriba-ambulance-wl-app": XskribaAmbulanceWlApp;
        "xskriba-ambulance-wl-editor": XskribaAmbulanceWlEditor;
        "xskriba-ambulance-wl-list": XskribaAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "xskriba-ambulance-wl-app": LocalJSX.XskribaAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLXskribaAmbulanceWlAppElement>;
            "xskriba-ambulance-wl-editor": LocalJSX.XskribaAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLXskribaAmbulanceWlEditorElement>;
            "xskriba-ambulance-wl-list": LocalJSX.XskribaAmbulanceWlList & JSXBase.HTMLAttributes<HTMLXskribaAmbulanceWlListElement>;
        }
    }
}
