import { HermesOperatorFunction } from '../observable/hermes.observable';
export declare function hermesDistinctUntilChanged<T>(compareFn?: (one: T, two: T) => boolean): HermesOperatorFunction<T, T>;
