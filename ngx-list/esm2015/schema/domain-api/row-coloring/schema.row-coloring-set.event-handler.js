/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaRowColoringRepository } from './schema.row-coloring.repository';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFJbkYsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUU1QyxZQUFvQiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUM1RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMEI7UUFFaEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLDJCQUEyQjs7Ozs7OztJQVF2Qix1RUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFSb3dDb2xvcmluZ1NldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgUm93Q29sb3JpbmdTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5OiBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8Um93Q29sb3JpbmdTZXRFdmVudD4ge1xuXHRcdHJldHVybiBSb3dDb2xvcmluZ1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBSb3dDb2xvcmluZ1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnUm93Q29sb3JpbmdTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldFJvd0NvbG9yaW5nKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==