import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { GuiComponent } from './gui-component';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare abstract class SmartComponent extends GuiComponent {
    protected readonly detector: ChangeDetectorRef;
    private viewInDom;
    private readonly unsubscribe$;
    protected constructor(detector: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    reRender(): void;
    isViewInDom(): boolean;
    /**
     * @deprecated instead use useReactiveContext
     */
    subscribe<T>(stream$: HermesObservable<T>, callback: (value: T) => void): void;
    /**
     * @deprecated instead use useReactiveContext
     */
    subscribeWithoutRender<T>(stream$: HermesObservable<T>, callback: (value: T) => void): void;
    subscribeAndEmit<V>(stream$: HermesObservable<V>, emitter: EventEmitter<V>, mapper?: (value: V) => any): void;
    protected unsubscribe(): void;
    protected takeUntil(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmartComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SmartComponent, never, never, {}, {}, never, never, false, never>;
}
