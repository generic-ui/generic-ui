import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { GuiComponent } from './gui-component';
import { Subscription } from 'rxjs';
export declare abstract class SmartComponent extends GuiComponent {
    protected readonly detector: ChangeDetectorRef;
    private viewInDom;
    private readonly streamCloser;
    protected constructor(detector: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    reRender(): void;
    isViewInDom(): boolean;
    subscribeAndRender(obs$: any, callback: (args: any) => void): Subscription;
    subscribeWithoutRender(obs$: any, callback: (args: any) => void): Subscription;
    protected unsubscribe(): void;
    protected takeUntil(): import("rxjs").MonoTypeOperatorFunction<unknown>;
}
