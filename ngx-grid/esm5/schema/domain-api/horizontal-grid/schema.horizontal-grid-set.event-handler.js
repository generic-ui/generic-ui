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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHN0c7SUFHQyw2Q0FBb0Isd0JBQXdEO1FBQXhELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7SUFDNUUsQ0FBQzs7OztJQUVELHNEQUFROzs7SUFBUjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxvREFBTTs7OztJQUFOLFVBQU8sS0FBbUM7UUFFekMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLDhCQUE4Qjs7SUF1QnZDLDBDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksbUNBQW1DOzs7Ozs7SUFFbkMsdUVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmhvcml6b250YWxHcmlkUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldEhvcml6b250YWxHcmlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==