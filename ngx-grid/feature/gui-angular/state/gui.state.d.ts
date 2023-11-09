import { OnDestroy } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class GuiState<T> implements OnDestroy {
    private state;
    private readonly state$;
    private readonly destroy$;
    ngOnDestroy(): void;
    setValue(state: T): void;
    setValue(state: Partial<T>): void;
    getValue(): T;
    getValue<K extends keyof T>(key: K): T[K];
    select(): HermesObservable<T>;
    select<K extends keyof T>(key: K): HermesObservable<T[K]>;
    connect(state$: HermesObservable<T>): void;
    connect(key: keyof T, value$: HermesObservable<T[keyof T]>): void;
    private setPartialState;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiState<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GuiState<any>>;
}
