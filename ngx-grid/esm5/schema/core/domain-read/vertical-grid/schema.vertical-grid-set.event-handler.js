/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaVerticalGridRepository } from './schema.vertical-grid.repository';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
var SchemaVerticalGridSetEventHandler = /** @class */ (function () {
    function SchemaVerticalGridSetEventHandler(schemaVerticalGridRepository) {
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
    }
    /**
     * @return {?}
     */
    SchemaVerticalGridSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return SchemaVerticalGridSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SchemaVerticalGridSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.schemaVerticalGridRepository.next(event.getAggregateId(), event.getVerticalGrid());
        }
    };
    SchemaVerticalGridSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaVerticalGridSetEventHandler.ctorParameters = function () { return [
        { type: SchemaVerticalGridRepository }
    ]; };
    return SchemaVerticalGridSetEventHandler;
}());
export { SchemaVerticalGridSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetEventHandler.prototype.schemaVerticalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHdkc7SUFHQywyQ0FBb0IsNEJBQTBEO1FBQTFELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDOUUsQ0FBQzs7OztJQUVELG9EQUFROzs7SUFBUjtRQUNDLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxrREFBTTs7OztJQUFOLFVBQU8sS0FBaUM7UUFFdkMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDeEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7O0lBdUJyQyx3Q0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGlDQUFpQzs7Ozs7O0lBRWpDLHlFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vYXBpL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRWZXJ0aWNhbEdyaWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19