/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
export class EditTemplateRepository {
    /**
     * @param {?} editTemplateFactory
     */
    constructor(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    findTemplate(dataType) {
        /** @type {?} */
        const typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    }
}
EditTemplateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditTemplateRepository.ctorParameters = () => [
    { type: EditTemplateFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditTemplateRepository.prototype.editTemplateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFLOUQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxRQUFrQjs7Y0FDeEIsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7UUFFOUQsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQVZELFVBQVU7Ozs7WUFKRixtQkFBbUI7Ozs7Ozs7SUFPZixxREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vZWRpdC10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlZGl0VGVtcGxhdGVGYWN0b3J5OiBFZGl0VGVtcGxhdGVGYWN0b3J5KSB7XG5cdH1cblxuXHRmaW5kVGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0Y29uc3QgdHlwZVRvVGVtcGxhdGUgPSB0aGlzLmVkaXRUZW1wbGF0ZUZhY3RvcnkuZ2V0VGVtcGxhdGVzKCk7XG5cblx0XHRyZXR1cm4gdHlwZVRvVGVtcGxhdGUuZ2V0KGRhdGFUeXBlKTtcblx0fVxuXG59XG4iXX0=