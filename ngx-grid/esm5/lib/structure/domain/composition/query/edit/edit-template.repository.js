/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
var EditTemplateRepository = /** @class */ (function () {
    function EditTemplateRepository(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    EditTemplateRepository.prototype.findTemplate = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        /** @type {?} */
        var typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    };
    EditTemplateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EditTemplateRepository.ctorParameters = function () { return [
        { type: EditTemplateFactory }
    ]; };
    return EditTemplateRepository;
}());
export { EditTemplateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditTemplateRepository.prototype.editTemplateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUs5RDtJQUdDLGdDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxRQUFrQjs7WUFDeEIsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7UUFFOUQsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBTEYsbUJBQW1COztJQWlCNUIsNkJBQUM7Q0FBQSxBQVpELElBWUM7U0FYWSxzQkFBc0I7Ozs7OztJQUV0QixxREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vZWRpdC10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlZGl0VGVtcGxhdGVGYWN0b3J5OiBFZGl0VGVtcGxhdGVGYWN0b3J5KSB7XG5cdH1cblxuXHRmaW5kVGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0Y29uc3QgdHlwZVRvVGVtcGxhdGUgPSB0aGlzLmVkaXRUZW1wbGF0ZUZhY3RvcnkuZ2V0VGVtcGxhdGVzKCk7XG5cblx0XHRyZXR1cm4gdHlwZVRvVGVtcGxhdGUuZ2V0KGRhdGFUeXBlKTtcblx0fVxuXG59XG4iXX0=