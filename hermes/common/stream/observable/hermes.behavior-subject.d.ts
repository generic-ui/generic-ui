import { HermesSubject } from './hermes.subject';
import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
export declare class HermesBehaviorSubject<T> extends HermesSubject<T> {
    private lastValue;
    constructor(defaultValue: T);
    next(value: T): void;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<T>): HermesSubscription;
}
//# sourceMappingURL=hermes.behavior-subject.d.ts.map