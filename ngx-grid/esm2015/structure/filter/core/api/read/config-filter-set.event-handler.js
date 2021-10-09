/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterEnabledArchive } from './filter-enabled.archive';
import { ConfigFilterSetEvent } from '../../domain/config/config-filter-set.event';
export class ConfigFilterSetEventHandler {
    /**
     * @param {?} structureFilterRepository
     */
    constructor(structureFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ConfigFilterSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ConfigFilterSetEvent')) {
            this.structureFilterRepository.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigFilterSetEventHandler.ctorParameters = () => [
    { type: FilterEnabledArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9yZWFkL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFLbkYsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUV2QyxZQUE2Qix5QkFBK0M7UUFBL0MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFzQjtJQUM1RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDaEY7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLG9CQUFvQjs7Ozs7OztJQVFoQixnRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL2ZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29uZmlnL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBDb25maWdGaWx0ZXJTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeTogRmlsdGVyRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxDb25maWdGaWx0ZXJTZXRFdmVudD4ge1xuXHRcdHJldHVybiBDb25maWdGaWx0ZXJTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29uZmlnRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdDb25maWdGaWx0ZXJTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRFbmFibGVkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==