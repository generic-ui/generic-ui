export declare abstract class Reactive {
    private readonly unsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    protected unsubscribe(): void;
    protected takeUntil(): import("rxjs").MonoTypeOperatorFunction<unknown>;
}
