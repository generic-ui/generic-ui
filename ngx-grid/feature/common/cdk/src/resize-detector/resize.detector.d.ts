import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare type ObservedSize = {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
};
export declare class ResizeDetector {
    private platformId;
    constructor(platformId: any);
    on(element: HTMLElement): HermesObservable<ObservedSize>;
    destroy(element: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeDetector, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResizeDetector>;
}
