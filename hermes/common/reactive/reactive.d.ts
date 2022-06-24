import { MonoTypeOperatorFunction } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class Reactive {
    private readonly hermesUnsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    protected takeUntil<T>(): MonoTypeOperatorFunction<T>;
    protected hermesUnsubscribe(): void;
    protected hermesTakeUntil(): any;
    protected isNotStopped(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Reactive, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Reactive>;
}
