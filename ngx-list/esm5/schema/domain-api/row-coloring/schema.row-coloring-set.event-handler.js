/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaRowColoringRepository } from './schema.row-coloring.repository';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
var SchemaRowColoringSetEventHandler = /** @class */ (function () {
    function SchemaRowColoringSetEventHandler(schemaRowColoringRepository) {
        this.schemaRowColoringRepository = schemaRowColoringRepository;
    }
    /**
     * @return {?}
     */
    SchemaRowColoringSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return RowColoringSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SchemaRowColoringSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.schemaRowColoringRepository.next(event.getAggregateId(), event.getRowColoring());
        }
    };
    SchemaRowColoringSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaRowColoringSetEventHandler.ctorParameters = function () { return [
        { type: SchemaRowColoringRepository }
    ]; };
    return SchemaRowColoringSetEventHandler;
}());
export { SchemaRowColoringSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRowColoringSetEventHandler.prototype.schemaRowColoringRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHbkY7SUFHQywwQ0FBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDNUUsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxpREFBTTs7OztJQUFOLFVBQU8sS0FBMEI7UUFFaEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRiwyQkFBMkI7O0lBdUJwQyx1Q0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGdDQUFnQzs7Ozs7O0lBRWhDLHVFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5yb3ctY29sb3JpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hUm93Q29sb3JpbmdTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFJvd0NvbG9yaW5nU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeTogU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Um93Q29sb3JpbmdTZXRFdmVudD4ge1xuXHRcdHJldHVybiBSb3dDb2xvcmluZ1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBSb3dDb2xvcmluZ1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnUm93Q29sb3JpbmdTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldFJvd0NvbG9yaW5nKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==