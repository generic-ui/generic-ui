import { MonoTypeOperatorFunction } from 'rxjs';
export declare abstract class Reactive {
    private readonly unsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    protected unsubscribe(): void;
    protected takeUntil<T>(): MonoTypeOperatorFunction<T>;
    protected isNotStopped(): boolean;
}
