import { Observable } from 'rxjs';
import { FabricDatePickerComposition } from './models/fabric-date-picker-composition';
import { FabricDatePickerOptions } from './models/fabric-date-picker-options';
export declare class FabricDatePickerCompositionService {
    private static readonly DEFAULT_COMPOSITION;
    private readonly datePickerFormat$;
    onComposition(): Observable<FabricDatePickerComposition>;
    next(datePipeOptions: FabricDatePickerOptions): void;
    private getComposition;
}
