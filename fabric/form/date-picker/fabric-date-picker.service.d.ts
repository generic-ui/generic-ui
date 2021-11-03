import { Observable } from 'rxjs';
import { FabricTimeValues } from './models/fabric-time-values';
export declare class FabricDatePickerService {
    private selectedDate;
    private selectedTime;
    private readonly selectedDate$;
    observeSelectedDate(): Observable<Date>;
    dateSelected(date: Date): void;
    changeTime(timeValues: FabricTimeValues, date: Date): void;
    next(): void;
    private setSelectedDateTime;
}
