import { ChangeDetectorRef } from '@angular/core';
import { Reactive } from './reactive';
export declare abstract class SmartComponent extends Reactive {
    protected readonly detector?: ChangeDetectorRef;
    protected constructor(detector?: ChangeDetectorRef);
    ngOnDestroy(): void;
    render(): void;
}
