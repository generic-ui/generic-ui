import { Observable } from 'rxjs';
export declare class ChangedValueEmitter<T> {
    private subject$;
    constructor();
    emit(value: T): void;
    select(): Observable<T>;
}
