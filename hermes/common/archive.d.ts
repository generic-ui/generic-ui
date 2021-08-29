import { Observable } from 'rxjs';
export declare abstract class Archive<T> {
    private readonly archive$;
    protected constructor(value?: T);
    on(): Observable<T>;
    next(value: T): void;
}
