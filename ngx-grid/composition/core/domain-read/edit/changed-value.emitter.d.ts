import { HermesObservable } from '@generic-ui/hermes';
export declare class ChangedValueEmitter<T> {
    private subject$;
    constructor();
    emit(value: T): void;
    on(): HermesObservable<T>;
}
