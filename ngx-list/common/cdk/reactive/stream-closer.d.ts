export declare class StreamCloser<T> {
    private readonly unsubscribe$;
    constructor();
    takeUntil(): import("@generic-ui/hermes/common/stream/observable/hermes.observable").HermesOperatorFunction<unknown, unknown>;
    unsubscribe(): void;
}
