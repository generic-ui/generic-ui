import { Observable } from 'rxjs';
import { FabricCalendarView } from '../models/fabric-calendar-view';
import * as i0 from "@angular/core";
export declare class FabricDatePickerCalendarViewService {
    private activeView$;
    onActiveView(): Observable<FabricCalendarView>;
    switchView(viewName: FabricCalendarView): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricDatePickerCalendarViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricDatePickerCalendarViewService>;
}
