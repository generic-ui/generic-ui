import { HermesObserver } from '../observable/hermes.observer';
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
export declare function subscriberForOperator<T>(observer: HermesObserver<T>, next?: (value: T) => void, complete?: () => void): HermesSubscriber<T>;
export declare function subscriberFromObserver<T>(observer: HermesObserver<T>): HermesSubscriber<T>;
