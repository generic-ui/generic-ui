/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaHorizontalGridRepository } from './schema.horizontal-grid.repository';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
export class SchemaHorizontalGridSetEventHandler {
    /**
     * @param {?} horizontalGridRepository
     */
    constructor(horizontalGridRepository) {
        this.horizontalGridRepository = horizontalGridRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SchemaHorizontalGridSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGridRepository.next(event.getAggregateId(), event.getHorizontalGrid());
        }
    }
}
SchemaHorizontalGridSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaHorizontalGridSetEventHandler.ctorParameters = () => [
    { type: SchemaHorizontalGridRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetEventHandler.prototype.horizontalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFJN0csTUFBTSxPQUFPLG1DQUFtQzs7OztJQUUvQyxZQUFvQix3QkFBd0Q7UUFBeEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFnQztJQUM1RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBbUM7UUFFekMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTEYsOEJBQThCOzs7Ozs7O0lBUTFCLHVFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGhvcml6b250YWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBUeXBlPFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZFJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRIb3Jpem9udGFsR3JpZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=