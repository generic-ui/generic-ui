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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSTlEO0lBR0MsZ0NBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsNkNBQVk7Ozs7SUFBWixVQUFhLFFBQWtCOztZQUN4QixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRTtRQUU5RCxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBVkQsVUFBVTs7OztnQkFKRixtQkFBbUI7O0lBZ0I1Qiw2QkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLHNCQUFzQjs7Ozs7O0lBRXRCLHFEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi9lZGl0LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlZGl0VGVtcGxhdGVGYWN0b3J5OiBFZGl0VGVtcGxhdGVGYWN0b3J5KSB7XG5cdH1cblxuXHRmaW5kVGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0Y29uc3QgdHlwZVRvVGVtcGxhdGUgPSB0aGlzLmVkaXRUZW1wbGF0ZUZhY3RvcnkuZ2V0VGVtcGxhdGVzKCk7XG5cblx0XHRyZXR1cm4gdHlwZVRvVGVtcGxhdGUuZ2V0KGRhdGFUeXBlKTtcblx0fVxuXG59XG4iXX0=