import { HermesObservable, HermesOperatorFunction } from '../observable/hermes.observable';
export declare function hermesTakeUntil<T>(notifier: HermesObservable<any>): HermesOperatorFunction<T, T>;
