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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHbkY7SUFHQywwQ0FBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDNUUsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxpREFBTTs7OztJQUFOLFVBQU8sS0FBMEI7UUFFaEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRiwyQkFBMkI7O0lBdUJwQyx1Q0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGdDQUFnQzs7Ozs7O0lBRWhDLHVFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVJvd0NvbG9yaW5nU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkLCBSb3dDb2xvcmluZ1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogVHlwZTxSb3dDb2xvcmluZ1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFJvd0NvbG9yaW5nU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFJvd0NvbG9yaW5nU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdSb3dDb2xvcmluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0Um93Q29sb3JpbmcoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19