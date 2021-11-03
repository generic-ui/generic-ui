import { HermesObservable } from './hermes.observable';
import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
export declare class HermesSubject<T> extends HermesObservable<T> {
    /**
     * After error
     */
    private thrownError;
    /**
     * After complete
     */
    private isCompleted;
    /**
     * After unsubscribe
     */
    private isClosed;
    private readonly subscribers;
    constructor();
    next(value: T): void;
    error(error: any): void;
    complete(): void;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<T>): HermesSubscription;
    unsubscribe(): void;
    toObservable(): HermesObservable<T>;
    private verifyNotClosed;
}
//# sourceMappingURL=hermes.subject.d.ts.map