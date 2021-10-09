/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterEnabledArchive } from './filter-enabled.archive';
import { ConfigFilterSetEvent } from '../../domain/config/config-filter-set.event';
var ConfigFilterSetEventHandler = /** @class */ (function () {
    function ConfigFilterSetEventHandler(structureFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @return {?}
     */
    ConfigFilterSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ConfigFilterSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ConfigFilterSetEvent')) {
            this.structureFilterRepository.next(event.getAggregateId(), event.getEnabled());
        }
    };
    ConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: FilterEnabledArchive }
    ]; };
    return ConfigFilterSetEventHandler;
}());
export { ConfigFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9yZWFkL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFJbkY7SUFHQyxxQ0FBNkIseUJBQStDO1FBQS9DLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBc0I7SUFDNUUsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNDLE9BQU8sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDaEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRixvQkFBb0I7O0lBdUI3QixrQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLDJCQUEyQjs7Ozs7O0lBRTNCLGdFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb25maWcvY29uZmlnLWZpbHRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIENvbmZpZ0ZpbHRlclNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5OiBGaWx0ZXJFbmFibGVkQXJjaGl2ZSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPENvbmZpZ0ZpbHRlclNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIENvbmZpZ0ZpbHRlclNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb25maWdGaWx0ZXJTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0NvbmZpZ0ZpbHRlclNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldEVuYWJsZWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19