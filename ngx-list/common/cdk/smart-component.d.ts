import { ChangeDetectorRef } from '@angular/core';
import { Reactive } from './reactive';
export declare abstract class SmartComponent extends Reactive {
    protected readonly detector: ChangeDetectorRef;
    private viewRendered;
    protected constructor(detector: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    reRender(): void;
    isViewRendered(): boolean;
}
