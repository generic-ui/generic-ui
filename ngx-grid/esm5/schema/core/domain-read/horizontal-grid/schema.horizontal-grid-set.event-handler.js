/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaHorizontalGridRepository } from './schema.horizontal-grid.repository';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
var SchemaHorizontalGridSetEventHandler = /** @class */ (function () {
    function SchemaHorizontalGridSetEventHandler(horizontalGridRepository) {
        this.horizontalGridRepository = horizontalGridRepository;
    }
    /**
     * @return {?}
     */
    SchemaHorizontalGridSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return SchemaHorizontalGridSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SchemaHorizontalGridSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGridRepository.next(event.getAggregateId(), event.getHorizontalGrid());
        }
    };
    SchemaHorizontalGridSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaHorizontalGridSetEventHandler.ctorParameters = function () { return [
        { type: SchemaHorizontalGridRepository }
    ]; };
    return SchemaHorizontalGridSetEventHandler;
}());
export { SchemaHorizontalGridSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetEventHandler.prototype.horizontalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHN0c7SUFHQyw2Q0FBb0Isd0JBQXdEO1FBQXhELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7SUFDNUUsQ0FBQzs7OztJQUVELHNEQUFROzs7SUFBUjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxvREFBTTs7OztJQUFOLFVBQU8sS0FBbUM7UUFFekMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLDhCQUE4Qjs7SUF1QnZDLDBDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksbUNBQW1DOzs7Ozs7SUFFbkMsdUVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vYXBpL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkLCBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBob3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZFJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRIb3Jpem9udGFsR3JpZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=