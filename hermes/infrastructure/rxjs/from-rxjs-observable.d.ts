import { HermesObservable } from '../../common/stream/observable/hermes.observable';
import { Observable } from 'rxjs';
export declare function fromRxJsObservable<T>(source$: Observable<T>): HermesObservable<T>;
