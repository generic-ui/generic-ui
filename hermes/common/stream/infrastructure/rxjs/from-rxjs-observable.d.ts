import { HermesObservable } from '../../core/observable/hermes.observable';
import { Observable } from 'rxjs';
export declare function fromRxJsObservable<T>(source$: Observable<T>): HermesObservable<T>;
