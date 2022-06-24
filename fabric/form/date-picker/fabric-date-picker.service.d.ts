import { Observable } from 'rxjs';
import { FabricTimeValues } from './models/fabric-time-values';
import * as i0 from "@angular/core";
export declare class FabricDatePickerService {
    private selectedDate;
    private selectedTime?;
    private readonly selectedDate$;
    observeSelectedDate(): Observable<Date>;
    dateSelected(date: Date): void;
    changeTime(timeValues: FabricTimeValues, date: Date): void;
    next(): void;
    private setSelectedDateTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDatePickerService>;
}
