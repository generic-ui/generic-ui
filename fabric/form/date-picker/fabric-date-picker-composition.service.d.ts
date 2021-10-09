import { Observable } from 'rxjs';
import { FabricDatePickerComposition } from './models/fabric-date-picker-composition';
export declare class FabricDatePickerCompositionService {
    private readonly datePickerFormat$;
    onComposition(): Observable<FabricDatePickerComposition>;
    next(datePipeOptions: string): void;
    private getComposition;
}
