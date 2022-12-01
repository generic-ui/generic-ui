import { MonoTypeOperatorFunction } from 'rxjs';
export declare abstract class Reactive {
    private readonly hermesUnsubscribe$;
    protected constructor();
    onDestroy(): void;
    protected takeUntil<T>(): MonoTypeOperatorFunction<T>;
    protected hermesUnsubscribe(): void;
    protected hermesTakeUntil(): any;
    protected isNotStopped(): boolean;
}
