import { HermesOperatorFunction } from '../observable/hermes.observable';
export declare function hermesTap<T>(operation: (value: T) => void): HermesOperatorFunction<T, T>;
