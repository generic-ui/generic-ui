import { HermesObserver } from '../hermes.observer';
export declare class HermesSubscriber<T> {
    private observer;
    private finalize;
    private completed;
    private closed;
    constructor(config: Partial<HermesObserver<T>>);
    next(value: T): void;
    error(error: any): void;
    complete(): void;
    unsubscribe(): void;
    setFinalize(finalize: () => void): void;
    getFinalize(): () => void;
    protected isCompleted(): boolean;
    protected isClosed(): boolean;
    protected getObserver(): Partial<HermesObserver<T>>;
}
