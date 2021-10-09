/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../domain/quick/config-quick-filter-set.event';
export class ConfigQuickFilterSetEventHandler {
    /**
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureQuickFilterRepository) {
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ConfigQuickFilterSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ConfigQuickFilterSetEvent')) {
            this.structureQuickFilterRepository.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigQuickFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigQuickFilterSetEventHandler.ctorParameters = () => [
    { type: QuickFilterEnabledArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9yZWFkL2NvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFLN0YsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUU1QyxZQUFvQiw4QkFBeUQ7UUFBekQsbUNBQThCLEdBQTlCLDhCQUE4QixDQUEyQjtJQUM3RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBZ0M7UUFFdEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDckY7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLHlCQUF5Qjs7Ozs7OztJQVFyQiwwRUFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcXVpY2stZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3F1aWNrL2NvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeTogUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0NvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRFbmFibGVkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==