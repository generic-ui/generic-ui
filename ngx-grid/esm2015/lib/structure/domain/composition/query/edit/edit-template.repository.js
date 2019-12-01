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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU05RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQWtCOztjQUN4QixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRTtRQUU5RCxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBVkQsVUFBVTs7OztZQUxGLG1CQUFtQjs7Ozs7OztJQVFmLHFEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi9lZGl0LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVkaXRUZW1wbGF0ZUZhY3Rvcnk6IEVkaXRUZW1wbGF0ZUZhY3RvcnkpIHtcblx0fVxuXG5cdGZpbmRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRjb25zdCB0eXBlVG9UZW1wbGF0ZSA9IHRoaXMuZWRpdFRlbXBsYXRlRmFjdG9yeS5nZXRUZW1wbGF0ZXMoKTtcblxuXHRcdHJldHVybiB0eXBlVG9UZW1wbGF0ZS5nZXQoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==