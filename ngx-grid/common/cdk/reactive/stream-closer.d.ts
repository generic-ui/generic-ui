export declare class StreamCloser<T> {
    private readonly unsubscribe$;
    constructor();
    takeUntil(): import("rxjs").MonoTypeOperatorFunction<unknown>;
    unsubscribe(): void;
}
