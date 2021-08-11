import { OnDestroy } from '@angular/core';
import { NgChanges } from './ng-changes';
export declare abstract class Gate<T = any> implements OnDestroy {
    private readonly streamCloser;
    protected constructor();
    ngOnDestroy(): void;
    isDefined(propertyName: string, changes: NgChanges<T>): boolean;
    protected unsubscribe(): void;
    protected takeUntil(): import("rxjs").MonoTypeOperatorFunction<unknown>;
}
