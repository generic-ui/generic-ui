/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaRowColoringRepository } from './schema.row-coloring.repository';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
export class SchemaRowColoringSetEventHandler {
    /**
     * @param {?} schemaRowColoringRepository
     */
    constructor(schemaRowColoringRepository) {
        this.schemaRowColoringRepository = schemaRowColoringRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return RowColoringSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.schemaRowColoringRepository.next(event.getAggregateId(), event.getRowColoring());
        }
    }
}
SchemaRowColoringSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaRowColoringSetEventHandler.ctorParameters = () => [
    { type: SchemaRowColoringRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRowColoringSetEventHandler.prototype.schemaRowColoringRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJdkYsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUU1QyxZQUFvQiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUM1RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMEI7UUFFaEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLDJCQUEyQjs7Ozs7OztJQVF2Qix1RUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFSb3dDb2xvcmluZ1NldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgUm93Q29sb3JpbmdTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5OiBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxSb3dDb2xvcmluZ1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFJvd0NvbG9yaW5nU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFJvd0NvbG9yaW5nU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdSb3dDb2xvcmluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0Um93Q29sb3JpbmcoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19