export declare class StreamCloser<T> {
    private readonly unsubscribe$;
    constructor();
    takeUntil(): import("@generic-ui/hermes/common/stream/core/observable/hermes.observable").HermesOperatorFunction<unknown, unknown>;
    unsubscribe(): void;
}
