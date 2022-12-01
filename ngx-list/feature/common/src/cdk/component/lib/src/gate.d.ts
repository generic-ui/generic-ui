import { EventEmitter, OnDestroy } from '@angular/core';
import { NgChanges } from './ng-changes';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare abstract class Gate<T = any> implements OnDestroy {
    private readonly streamCloser;
    private readonly hermesUnsubscribe$;
    protected constructor();
    ngOnDestroy(): void;
    isDefined(propertyName: string, changes: NgChanges<T>): boolean;
    subscribeAndEmit<V>(stream$: HermesObservable<V>, emitter: EventEmitter<V>): void;
    protected unsubscribe(): void;
    protected hermesUnsubscribe(): void;
    protected hermesTakeUntil(): any;
    protected takeUntil(): import("@generic-ui/hermes/common/stream/core/observable/hermes.observable").HermesOperatorFunction<unknown, unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Gate<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Gate<any>, never, never, {}, {}, never, never, false, never>;
}
