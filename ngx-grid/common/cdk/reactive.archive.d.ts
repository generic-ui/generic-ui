import { Observable } from 'rxjs';
export declare abstract class ReactiveArchive<T> {
    private archive$;
    protected constructor(value?: T);
    set(value: T): void;
    select(): Observable<T>;
}
