import { Observable } from 'rxjs';
export declare class FabricDatePickerYearsService {
    private readonly years$;
    onYears(): Observable<Array<Array<number>>>;
    next(years: Array<Array<number>>): void;
}
