/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../domain/quick/config-quick-filter-set.event';
var ConfigQuickFilterSetEventHandler = /** @class */ (function () {
    function ConfigQuickFilterSetEventHandler(structureQuickFilterRepository) {
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @return {?}
     */
    ConfigQuickFilterSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ConfigQuickFilterSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigQuickFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ConfigQuickFilterSetEvent')) {
            this.structureQuickFilterRepository.next(event.getAggregateId(), event.getEnabled());
        }
    };
    ConfigQuickFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigQuickFilterSetEventHandler.ctorParameters = function () { return [
        { type: QuickFilterEnabledArchive }
    ]; };
    return ConfigQuickFilterSetEventHandler;
}());
export { ConfigQuickFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9yZWFkL2NvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJN0Y7SUFHQywwQ0FBb0IsOEJBQXlEO1FBQXpELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBMkI7SUFDN0UsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNDLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxpREFBTTs7OztJQUFOLFVBQU8sS0FBZ0M7UUFFdEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDckY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRix5QkFBeUI7O0lBdUJsQyx1Q0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGdDQUFnQzs7Ozs7O0lBRWhDLDBFQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9xdWljay1maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcXVpY2svY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Q29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudD4ge1xuXHRcdHJldHVybiBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldEVuYWJsZWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19