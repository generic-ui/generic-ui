import { OnDestroy } from '@angular/core';
export declare abstract class FabricReactive implements OnDestroy {
    private readonly unsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    protected unsubscribe(): void;
    protected takeUntil(): import("rxjs").MonoTypeOperatorFunction<unknown>;
}
