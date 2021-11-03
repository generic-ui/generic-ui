import { Injectable } from '@angular/core';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
import * as i0 from "@angular/core";
import * as i1 from "./field-read-model.archive";
import * as i2 from "./field.ui-converter";
export class FieldsInitedEventHandler {
    constructor(fieldReadModelRepository, fieldUiConverter) {
        this.fieldReadModelRepository = fieldReadModelRepository;
        this.fieldUiConverter = fieldUiConverter;
    }
    forEvent() {
        return FieldsInitedEvent;
    }
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            const fields = this.fieldUiConverter.convert(event.getFields());
            this.fieldReadModelRepository.next(event.getAggregateId(), fields);
        }
    }
}
FieldsInitedEventHandler.ɵfac = function FieldsInitedEventHandler_Factory(t) { return new (t || FieldsInitedEventHandler)(i0.ɵɵinject(i1.FieldReadModelArchive), i0.ɵɵinject(i2.FieldUiConverter)); };
FieldsInitedEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldsInitedEventHandler, factory: FieldsInitedEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldsInitedEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.FieldReadModelArchive }, { type: i2.FieldUiConverter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQUsxRSxNQUFNLE9BQU8sd0JBQXdCO0lBRXBDLFlBQW9CLHdCQUErQyxFQUN4RCxnQkFBa0M7UUFEekIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF1QjtRQUN4RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzdDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQXdCO1FBRTlCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBRTdDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFFaEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkU7SUFFRixDQUFDOztnR0FuQlcsd0JBQXdCOzhFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbEFyY2hpdmUgfSBmcm9tICcuL2ZpZWxkLXJlYWQtbW9kZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWVsZFVpQ29udmVydGVyIH0gZnJvbSAnLi9maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBGaWVsZHNJbml0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5OiBGaWVsZFJlYWRNb2RlbEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgZmllbGRVaUNvbnZlcnRlcjogRmllbGRVaUNvbnZlcnRlcikge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIEZpZWxkc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpZWxkc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZFVpQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLmZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGZpZWxkcyk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19