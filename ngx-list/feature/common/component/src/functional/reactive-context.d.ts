import { ChangeDetectorRef } from '@angular/core';
import { HermesObservable, HermesSubscription } from '@generic-ui/hermes';
export interface ReactiveContext<T> {
    connect<T>(stream$: HermesObservable<T>): ReactiveContext<T>;
    subscribe(next?: (value: T) => void, error?: (e: any) => void, complete?: () => void): HermesSubscription;
    subscribeAndRender(next?: (value: T) => void, error?: (e: any) => void, complete?: () => void): HermesSubscription;
    unsubscribe(): void;
}
export declare function useReactiveContext<T>(stream$?: HermesObservable<T>, cd?: ChangeDetectorRef): ReactiveContext<T>;
