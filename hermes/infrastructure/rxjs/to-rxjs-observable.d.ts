import { HermesObservable } from '../../common/stream/observable/hermes.observable';
import { Observable } from 'rxjs';
export declare function toRxJsObservable<T>(source$: HermesObservable<T>): Observable<T>;
