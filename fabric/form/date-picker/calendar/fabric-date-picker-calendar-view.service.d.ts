import { Observable } from 'rxjs';
import { FabricCalendarView } from '../models/fabric-calendar-view';
export declare class FabricDatePickerCalendarViewService {
    private activeView$;
    onActiveView(): Observable<FabricCalendarView>;
    switchView(viewName: FabricCalendarView): void;
}
